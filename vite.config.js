import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Habilitar la opción de "historyApiFallback"
    historyApiFallback: true,
  },
})
