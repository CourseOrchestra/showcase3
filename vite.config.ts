import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import path from "path";

export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  test: {
    environment: "happy-dom",
    deps: {
      inline: ["vuetify"],
    },
  },
});
