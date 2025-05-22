import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/gym/', // ← très important
  plugins: [react()],
});
