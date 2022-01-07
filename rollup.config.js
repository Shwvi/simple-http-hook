// import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import rollupTypescript from "rollup-plugin-typescript2";
import config from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      name: "simple-http-hook",
      file: "dist/index.js",
      format: "umd",
      globals: {
        axios: "axios",
        koa: "koa",
        "koa-bodyparser": "koaBodyParser",
        "koa-router": "koaRouter",
      },
    },
    {
      name: "simple-http-hook",
      file: "dist/es/index.js",
      format: "es",
    },
  ],
  plugins: [
    // terser(),
    json(),
    rollupTypescript({ useTsconfigDeclarationDir: true }),
  ],
  external: Object.keys(config.dependencies),
};
