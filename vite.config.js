import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shiny-dental/', // أضف السطر ده هنا بالظبط بـاسم مشروعك
})