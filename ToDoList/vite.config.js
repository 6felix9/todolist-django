import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/static/frontend/assets/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,
        assetFileNames: `index.css`
      }
    }
  }
})
