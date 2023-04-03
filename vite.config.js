import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [
      vue(),
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
