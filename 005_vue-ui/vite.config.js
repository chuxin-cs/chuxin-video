import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 关闭代码压缩
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"]
        }
      },
    },
  }
})