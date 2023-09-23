import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@vuetify/labs': '/node_modules/vuetify/lib/labs'
    }
  },
  plugins: [vue()],
  server: {
    port: 3000
  }
});
