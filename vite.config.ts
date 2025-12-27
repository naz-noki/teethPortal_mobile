import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  base: "/teethPortal_mobile",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Отключить ненужные функции в продакшене
  appType: "spa",
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["lottie-web"], // Исключить тяжелые библиотеки из предварительной оптимизации
    esbuildOptions: {
      target: "es2020",
    },
  },
});
