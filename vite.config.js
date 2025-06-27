import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Plant-Shopping-Ecommerce",
  plugins: [react()],
})
