import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend during development so cookies are same-origin
      '/api': {
        target: 'https://streamify-tt74.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
