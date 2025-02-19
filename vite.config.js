import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //開發中、產品路徑
  base: process.env.NODE_ENV === "production" ? '/2025_hex_React_classwork03/' : '/' ,
  plugins: [react()],
})
