import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import path from "path";

export default defineConfig({
  server: {
    host: "127.0.0.1",
  },

  plugins: [
    {
      name: "vitest-plugin-beforeall",
      config: () => ({
        test: { setupFiles: ["./tests/unit/beforeall.ts"] },
      }),
    },

    vue(),
    vuetify(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  test: {
    globals: true,
    environment: "happy-dom",
    deps: {
      inline: ["vuetify"],
    },
  },
});
