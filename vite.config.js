import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import eslintPlugin from "vite-plugin-eslint"

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
        "@/": new URL(
          "./src/",
          import.meta.url,
        ).pathname,
      },
    },
  },
)
