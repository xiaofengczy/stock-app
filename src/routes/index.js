export default {
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/stocks/trader-stock',
          component: 'trader-stock',
          title: '今日操盘',
        },
        {
          path: '/stocks/backup-stock',
          component: '/stocks/backup-stock',
          title: '股票池',
        },
        {
          path: '/stocks/event-driver',
          component: '/stocks/event-driver',
          title: '事件驱动',
        },
        {
          path: '/stocks/trader-stock/add',
          component: '/stocks/trader-stock/add',
          title: '今日操盘',
        },
        {
          path: '/stocks/trader-stock/edit',
          component: '/stock/trader-stock/edit',
          title: '操盘编辑',
        },
        {
          path: '/stocks/trader-stock/detail',
          component: '/stocks/trader-stock/detail',
          title: '操盘详情',
        },
        {
          path: '/stocks/backup-stock/add',
          component: '/stocks/backup-stock/add',
          title: '新增股票',
        },
        {
          path: '/stocks/backup-stock/edit',
          component: '/stocks/backup-stock/edit',
          title: '股票编辑',
        },
        {
          path: '/stocks/backup-stock/detail',
          component: '/stocks/backup-stock/detail',
          title: '股票详情',
        },
        {
          path: '/stocks/event-driver/add',
          component: '/stocks/event-driver/add',
          title: '新增事件',
        },
        {
          path: '/stocks/event-driver/edit',
          component: '/stocks/event-driver/edit',
          title: '事件编辑',
        },
        {
          path: '/stocks/event-driver/detail',
          component: '/stocks/event-driver/detail',
          title: '事件详情',
        },
      ],
    },
  ],
};
