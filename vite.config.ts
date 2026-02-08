import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Security Note: We intentionally do NOT define process.env.GEMINI_API_KEY here.
  // The key should only live in Cloudflare Pages Secrets and be accessed 
  // by the 'functions/api/chat.js' backend handler.
});