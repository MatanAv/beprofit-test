import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@vuetify/labs': '/node_modules/vuetify/lib/labs'
    }
  },
  plugins: [vue(), vuetify()],
  server: {
    port: 3000
  }
});
