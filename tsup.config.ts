import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  cjsInterop: true,
  bundle: false,
});
