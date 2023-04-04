import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [
      vue(),
      eslintPlugin({
        fix: true,
      }),
    ],
    server: {
      port: 6161,
    },
    resolve: {
      alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Import the all abstract style definitions like variables, mixins, functions to all vue single file components(SFCs)
        // WARN: please be careful, don't import style definitions like classes, it will cause duplicates
        additionalData: `@import "@/assets/css/additional.scss";`,
      },
    },
  },
});
