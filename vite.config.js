import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'lucide-react']
  },
  server: {
    allowedHosts: ['a87d-2401-4900-5f2d-54d6-3d73-928b-9d51-ebb6.ngrok-free.app']
  }
})