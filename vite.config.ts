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

  // Оптимизация сборки
  build: {
    // Оптимизация изображений и ассетов
    assetsInlineLimit: 4096, // Встроить файлы <4KB как base64
    cssCodeSplit: true, // Разделить CSS на чанки
    cssMinify: true, // Минифицировать CSS

    // Отчеты для анализа размера бандла
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500, // Предупреждение при размере чанка >500KB
  },

  // Отключить ненужные функции в продакшене
  appType: "spa",
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      target: "es2020",
    },
  },
});
