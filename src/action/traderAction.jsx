export const addTrader = params => ({
  type: 'trader/addTrader',
  payload: params,
});

export const listTrader = params => ({
  type: 'trader/listTrader',
  payload: params,
});

export const getTrader = params => ({
  type: 'trader/getTrader',
  payload: params,
});

export const deleteTrader = params => ({
  type: 'trader/deleteTrader',
  payload: params,
});

export const editTrader = params => ({
  type: 'trader/editTrader',
  payload: params,
});
