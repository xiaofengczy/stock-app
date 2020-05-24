import { eventService } from '@services';
import modelExtend from 'dva-model-extend';
import { basicModel } from '@utils/model';

export default modelExtend(basicModel, {
  namespace: 'event',
  state: {},

  effects: {
    *addEvent(action, { call, put }) {
      const rest = yield call(eventService.addEvent, action.payload);
      return rest;
    },

    *listEvent(action, { call, put }) {
      const rest = yield call(eventService.listEvent, action.payload);
      return rest;
    },

    *getEvent(action, { call, put }) {
      const rest = yield call(eventService.getEvent, action.payload);
      return rest;
    },

    *deleteEvent(action, { call, put }) {
      const rest = yield call(eventService.deleteEvent, action.payload);
      return rest;
    },

    *editEvent(action, { call, put }) {
      const rest = yield call(eventService.editEvent, action.payload);
      return rest;
    },
  },
});
