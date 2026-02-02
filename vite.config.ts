import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wolf/',
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
  // Production build optimizations for low-end mobile devices
  build: {
    target: 'es2017', // Better compatibility + faster parsing on old devices
    sourcemap: false, // Reduce bundle size, no debug maps in production
    minify: 'esbuild', // Fast minification
    cssMinify: true, // Minify CSS
    chunkSizeWarningLimit: 900, // Reduced from 1000

    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries (used on every page)
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Animation library (heavy, separate chunk)
          'motion': ['framer-motion'],
          // Icons (moderate size)
          'icons': ['lucide-react'],
          // Toast notifications
          'sonner': ['sonner'],
        },
      },
    },
  },
  // Image optimization
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png'],
})
