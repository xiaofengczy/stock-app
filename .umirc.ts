import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/trader',
          component: 'trader',
          title: '今日操盘',
        },
        {
          path: '/stockpool',
          component: 'stockpool',
          title: '股票池',
        },
        {
          path: '/eventdriven',
          component: 'eventdriven',
          title: '事件驱动',
        },
        {
          path: '/trader/add',
          component: 'trader/add',
          title: '今日操盘',
        },
      ],
    },
  ],
  alias: {
    '@': resolve(__dirname, './src'),
    '@utils': resolve(__dirname, './src/utils'),
    '@pages': resolve(__dirname, './src/pages'),
    '@assets': resolve(__dirname, './src/assets'),
    '@models': resolve(__dirname, './src/models'),
    '@services': resolve(__dirname, './src/services'),
    '@components': resolve(__dirname, './src/components'),
    '@layouts': resolve(__dirname, './src/layouts'),
  },
});
