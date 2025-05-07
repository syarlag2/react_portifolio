import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react_portifolio/', // <-- MUST match your repo name
  plugins: [react()],
})
