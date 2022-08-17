const vue = require('@vitejs/plugin-vue2');
import { resolve } from 'node:path';

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve('src')
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  } 
};
