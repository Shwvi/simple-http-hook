// import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      name: "simple-http-hook",
      file: "dist/index.js",
      format: "umd",
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
};
