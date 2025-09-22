import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // avaa selaimen automaattisesti dev-serverin käynnistyessä
  },
  resolve: {
    alias: {
      "@": "/src", // mahdollistaa importit tyyliin: import MyComp from "@/components/MyComp"
    },
  },
  test: {
    globals: true, // mahdollistaa describe/it ilman importteja
    environment: "jsdom", // React-komponenttien renderöinti testissä
    setupFiles: "./src/setupTests.ts", // jest-dom ja muut setupit
    coverage: {
      reporter: ["text", "lcov"], // tekstiraportti + lcov CI-integraatioon
      exclude: [
        "node_modules/",
        "dist/",
        "src/setupTests.ts",
        "src/main.tsx",
        "src/vite-env.d.ts",
      ],
    },
  },
});
