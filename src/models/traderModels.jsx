import { traderService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';
import { history } from 'umi';

export default modelExtend(basicModel, {
  namespace: 'trader',
  state: {},

  effects: {
    *addTrader(action, { call, put }) {
      const rest = yield call(traderService.addTrader, action.payload);
      return rest;
    },

    *listTrader(action, { call, put }) {
      const rest = yield call(traderService.listTrader, action.payload);
      return rest;
    },

    *getTrader(action, { call, put }) {
      const rest = yield call(traderService.getTrader, action.payload);
      return rest;
    },

    *deleteTrader(action, { call, put }) {
      const rest = yield call(traderService.deleteTrader, action.payload);
      return rest;
    },

    *editTrader(action, { call, put }) {
      const rest = yield call(traderService.editTrader, action.payload);
      return rest;
    },
  },
});
