import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    watch: {
      usePolling: true,
    },
  },
});