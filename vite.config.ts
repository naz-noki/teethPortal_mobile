import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/  
export default defineConfig(({ mode }) => ({
  base: '/teethPortal_mobile',
  
  plugins: [
    react({
      // Оптимизация React в продакшене
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
      include: /\.(jsx|tsx)$/,
    }),
    splitVendorChunkPlugin(), // Оптимизация чанков
    mode === 'production' && 
      visualizer({ 
        gzipSize: true, 
        brotliSize: true,
        filename: './dist/stats.html' 
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Алиасы для часто используемых путей
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  // Оптимизация сборки
  build: { 
    // Оптимизация чанков
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Разделить большие библиотеки на отдельные чанки
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            } else if (id.includes('axios') || id.includes('firebase')) {
              return 'vendor-api';
            } else if (id.includes('lottie') || id.includes('framer-motion')) {
              return 'vendor-animation';
            }
            return 'vendor';
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

  // Оптимизация development сервера
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: false, // Не открывать браузер автоматически
    cors: true,
    // Кэширование для ускорения перезагрузки
    warmup: {
      clientFiles: ['./src/**/*.{js,ts,jsx,tsx}']
    },
    // Оптимизация HMR
    hmr: {
      overlay: false, // Отключить оверлей при ошибках
      protocol: 'ws',
      host: 'localhost',
    },
  },

  // Оптимизация для production
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none', // Удалить legal comments
  },

  // Оптимизация кэширования
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf', '**/*.svg'],

  // Performance hints
  performance: {
    hints: mode === 'production' ? 'warning' : false,
    maxEntrypointSize: 500000, // 500KB
    maxAssetSize: 300000, // 300KB
  },

  // Отключить ненужные функции в продакшене
  appType: 'spa',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lottie-web'], // Исключить тяжелые библиотеки из предварительной оптимизации
    esbuildOptions: {
      target: 'es2020',
    },
  },
}));
