/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  plugins: [vue()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
  },
});
