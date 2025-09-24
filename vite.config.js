import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-S/',    // <-- add this line
  plugins: [react()],
  // ...any other config
})
