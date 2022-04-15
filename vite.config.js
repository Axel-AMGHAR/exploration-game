import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cors from 'cors'

// https://vitejs.dev/config/
export default defineConfig({
  server: {

   proxy: {

     "/api": {
       target: "http://141.95.153.155",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/api/, '')
     },


   },
  },
  plugins: [vue()]
})
