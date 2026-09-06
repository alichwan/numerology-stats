import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` must match the GitHub Pages sub-path: https://alichwan.github.io/numerology-stats/
export default defineConfig({
  base: '/numerology-stats/',
  plugins: [react()],
})
