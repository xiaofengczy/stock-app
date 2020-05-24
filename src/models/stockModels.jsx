import { stockService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';
import { history } from 'umi';

export default modelExtend(basicModel, {
  namespace: 'stock',
  state: {},

  effects: {
    *addStock(action, { call, put }) {
      const rest = yield call(stockService.addStock, action.payload);
      return rest;
    },

    *listStock(action, { call, put }) {
      const rest = yield call(stockService.listStock, action.payload);
      return rest;
    },

    *getStock(action, { call, put }) {
      const rest = yield call(stockService.getStock, action.payload);
      return rest;
    },

    *deleteStock(action, { call, put }) {
      const rest = yield call(stockService.deleteStock, action.payload);
      return rest;
    },

    *editStock(action, { call, put }) {
      const rest = yield call(stockService.editStock, action.payload);
      return rest;
    },
  },
});
