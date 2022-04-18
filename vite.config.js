import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
   proxy: {
     "/firstStage": {
       target: "http://141.95.153.155",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/firstStage/, '')
     },
     "/secondStage": {
       target: "http://141.95.153.155:8000",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/secondStage/, '')
     },
     "/thirdStage": {
       target: "http://141.95.153.155:7259",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/thirdStage/, '')
     }
   },
  },
  plugins: [vue()]
})
