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
          path: '/stock',
          component: 'stock',
          title: '股票池',
        },
        {
          path: '/event',
          component: 'event',
          title: '事件驱动',
        },
        {
          path: '/trader/add',
          component: 'trader/add',
          title: '今日操盘',
        },
        {
          path: '/trader/edit',
          component: 'trader/edit',
          title: '操盘编辑',
        },
        {
          path: '/trader/detail',
          component: 'trader/detail',
          title: '操盘详情',
        },
        {
          path: '/stock/add',
          component: 'stock/add',
          title: '新增股票',
        },
        {
          path: '/stock/edit',
          component: 'stock/edit',
          title: '股票编辑',
        },
        {
          path: '/stock/detail',
          component: 'stock/detail',
          title: '股票详情',
        },
        {
          path: '/event/add',
          component: 'event/add',
          title: '新增事件',
        },
        {
          path: '/event/edit',
          component: 'event/edit',
          title: '事件编辑',
        },
        {
          path: '/event/detail',
          component: 'event/detail',
          title: '事件详情',
        },
      ],
    },
  ],
  proxy: {
    '/stock-service': {
      changeOrigin: true,
      target: 'http://localhost:8088',
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
