import { defineConfig } from 'vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueRouter({
      dts: 'types/auto-router.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', VueRouterAutoImports],
      resolvers:[ElementPlusResolver()],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      resolvers:[ElementPlusResolver()],
      dts: 'types/auto-components.d.ts'
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
      "sub": path.resolve(__dirname, "./src/subcomponents"),
    },
    extensions: ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
  }
})
