import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Dev proxy to avoid CORS when calling the production backend during local development.
    // Routes starting with /api will be proxied to the backend origin.
    proxy: {
      '/api': {
        target: 'https://astrolozee-backend.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
