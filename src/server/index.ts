import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as Router from "koa-router";

function createHookServer() {
  const app = new Koa();
  const router = new Router();
  app.use(bodyParser({}));
  function registerHook(
    path: string,
    methods: string[],
    callback: (
      getParams: URLSearchParams,
      response: Koa.Response & {
        body: any;
      }
    ) => void,
    opts?: Router.ILayerOptions
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
