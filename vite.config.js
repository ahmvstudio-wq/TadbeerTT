import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ssgPlugin } from 'vite-plugin-ssg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      pages: ['src/App.jsx'],
      config: {
        outDir: 'dist',
      }
    })
  ],
})
