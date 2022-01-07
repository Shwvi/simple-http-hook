// these packages will be namespaces
import * as Koa from "koa";
import * as koaBodyparser from "koa-bodyparser";
import * as koaRouter from "koa-router";
import * as koaCors_ from "koa-cors";
// require will finall import the correct packages
const koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const koaCors = require("koa-cors");
function createHookServer() {
  const app = new koa();
  const router = new Router();
  app.use(bodyparser({}));
  app.use(koaCors());
  function registerHook(
    path: string,
    methods: string[],
    callback: (
      getParams: URLSearchParams,
      response: Koa.Response & {
        body: any;
      }
    ) => void,
    opts?: koaRouter.ILayerOptions
  ) {
    router.register(
      path,
      methods,
      async (ctx, next) => {
        const { request, response } = ctx;
        await callback(new URL(request.URL).searchParams, response);
        response.status = 200;
      },
      opts
    );
  }

  function listen(port: number) {
    return new Promise<void>((resolve, reject) => {
      app
        .listen(port, () => {
          resolve();
        })
        .once("error", (err) => {
          reject(err);
        });
    });
  }
  app.use(router.routes());
  return { listen, registerHook };
}

export default {
  createHookServer,
};
