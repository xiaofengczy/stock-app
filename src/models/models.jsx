import { stockService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';
import { history } from 'umi';

export default modelExtend(basicModel, {
  namespace: 'stock',
  state: {},

  effects: {
    *doTest(action, { call, put }) {
      console.log(action.payload);
      const rest = yield call(stockService.doTest, action.payload);
      console.log(rest);
    },

    *addTrader(action, { call, put }) {
      console.log(action.payload);
      const rest = yield call(stockService.addTrader, action.payload);
      return rest;
    },
  },
});
