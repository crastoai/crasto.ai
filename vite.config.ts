import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,   // expõe a URL na rede local também
    port: 5173,
    open: true,   // abre o navegador automaticamente
  },
  build: {
    // Divide bibliotecas pesadas em chunks próprios: cacheiam entre deploys
    // e o app carrega mais rápido em visitas seguintes.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          gsap: ['gsap', '@gsap/react'],
        },
      },
    },
  },
})
