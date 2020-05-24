import { stockService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';
import { history } from 'umi';

export default modelExtend(basicModel, {
  namespace: 'stock',
  state: {
    pagination:{
      page:1,
      pageSize:10,
      total:0
    }
  },

  effects: {
    *addStock(action, { call, put }) {
      const rest = yield call(stockService.addStock, action.payload);
      return rest;
    },

    *listStock(action, { call, put }) {
      const rest = yield call(stockService.listStock, action.payload);
      yield put({
        type: 'updateState',
        payload: {
          pagination:{
            page:rest.page,
            pageSize:rest.pageSize,
            total:rest.total
          }
        }
      });
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
