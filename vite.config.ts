import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: "./src/types/auto-imports.d.ts",
      imports: ["vue", "vue-router","@vueuse/core","pinia"],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "./src/types/components.d.ts",
      dirs: ["./src/components","./src/pages/**/components"],
      extensions: ["vue"],
    }),
    
    
  ],

  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    port:9001,
  
  }
  
  
})
