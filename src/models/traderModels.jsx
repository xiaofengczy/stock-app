import { traderService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';
import { history } from 'umi';

export default modelExtend(basicModel, {
  namespace: 'trader',
  state: {},

  effects: {
    *addTrader(action, { call, put }) {
      const rest = yield call(stockService.addTrader, action.payload);
      return rest;
    },

    *listTrader(action, { call, put }) {
      const rest = yield call(stockService.listTrader, action.payload);
      return rest;
    },

    *getTrader(action, { call, put }) {
      const rest = yield call(stockService.getTrader, action.payload);
      return rest;
    },

    *deleteTrader(action, { call, put }) {
      const rest = yield call(stockService.deleteTrader, action.payload);
      return rest;
    },

    *editTrader(action, { call, put }) {
      const rest = yield call(stockService.editTrader, action.payload);
      return rest;
    },
  },
});
