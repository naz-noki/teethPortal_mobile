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
    // Оптимизация чанков
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Разделить большие библиотеки на отдельные чанки
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            } else if (id.includes("axios") || id.includes("firebase")) {
              return "vendor-api";
            } else if (id.includes("lottie") || id.includes("framer-motion")) {
              return "vendor-animation";
            }
            return "vendor";
          }
        },
        // Оптимизация имен файлов для кэширования
        entryFileNames: `[name]-[hash].js`,
        chunkFileNames: `[name]-[hash].js`,
        assetFileNames: `[name]-[hash].[ext]`,
      },
    },

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
    exclude: ["lottie-web"], // Исключить тяжелые библиотеки из предварительной оптимизации
    esbuildOptions: {
      target: "es2020",
    },
  },
});
