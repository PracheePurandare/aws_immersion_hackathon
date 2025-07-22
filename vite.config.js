import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/2025/neoniche/vite/',  
  plugins: [react()],
  build: {
    outDir: 'build',  // Change from 'dist' to 'build'
  }
})



