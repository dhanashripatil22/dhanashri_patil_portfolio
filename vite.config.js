import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dhanashri_patil_portfolio",
  build: {
    outDir: 'dist', // Ensure this matches your output directory
}
});

