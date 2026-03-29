import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    // Specify options like environment, globals, etc.
    environment: 'jsdom', // use jsdom for browser-like testing
  },
  server: {
    allowedHosts: ['app', 'localhost'],
  }
})
