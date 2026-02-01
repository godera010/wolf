import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Performance optimizations
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['motion/react'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    // Enable faster HMR
    hmr: {
      overlay: true,
    },
    // Optimize warm-up
    warmup: {
      clientFiles: ['./src/app/pages/HomePage.tsx', './src/main.tsx'],
    },
  },
  // Image optimization
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png'],
})
