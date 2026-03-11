import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'lucide-react']
  },
  server: {
    allowedHosts: ['0eb8-2409-40d7-103b-e337-4ca9-50f1-e378-15ac.ngrok-free.app']
  }
})