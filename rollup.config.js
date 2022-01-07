import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import rollupTypescript from "rollup-plugin-typescript2";
export default {
  input: "src/main.ts",
  output: [
    {
      name: "simple_http_hook",
      file: "dist/bundle.js",
      format: "umd",
    },
    {
        name: "simple_http_hook",
        file: "dist/es/bundle.js",
        format: "es",
      },
    {
      name: "simple_http_hook",
      file: "dist/bundle.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [json(), rollupTypescript({ useTsconfigDeclarationDir: true })],
};
