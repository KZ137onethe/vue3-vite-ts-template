import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 6000,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
  }
})
