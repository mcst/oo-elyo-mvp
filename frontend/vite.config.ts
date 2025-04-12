import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Damit der Server auch von extern erreichbar ist
    port: 5173, // Port, auf dem der Server läuft
  },
  plugins: [react()],
})
