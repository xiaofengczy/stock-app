import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/stock-service': {
      changeOrigin: true,
      target: 'http://148.70.30.245:8088',
    },
  },
  alias: {
    '@': resolve(__dirname, './src'),
    '@utils': resolve(__dirname, './src/utils'),
    '@pages': resolve(__dirname, './src/pages'),
    '@assets': resolve(__dirname, './src/assets'),
    '@models': resolve(__dirname, './src/models'),
    '@services': resolve(__dirname, './src/services'),
    '@components': resolve(__dirname, './src/components'),
    '@layouts': resolve(__dirname, './src/layouts'),
    '@action': resolve(__dirname, './src/action'),
  },
});
