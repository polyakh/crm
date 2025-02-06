import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '~features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '~modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '~use-cases': fileURLToPath(new URL('./src/use-cases', import.meta.url)),
      '~core': fileURLToPath(new URL('./src/core', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3007',
        changeOrigin: true, // Ensures backend sees the request as coming from localhost:3007
        secure: false, // Disable SSL validation for local development
      },
    },
  },
})
