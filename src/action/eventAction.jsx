export const addEvent = params => ({
  type: 'event/addEvent',
  payload: params,
});

export const listEvent = params => ({
  type: 'event/listEvent',
  payload: params,
});

export const getEvent = params => ({
  type: 'event/getEvent',
  payload: params,
});

export const deleteEvent = params => ({
  type: 'event/deleteEvent',
  payload: params,
});

export const editEvent = params => ({
  type: 'event/editEvent',
  payload: params,
});
