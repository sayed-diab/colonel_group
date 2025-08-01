import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/colonel_group/',
  optimizeDeps: {
    include: ['animejs/lib/anime.es.js'],
  },
});
