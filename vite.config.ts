import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({ cache: false })],
  base: "/ai_tools/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
