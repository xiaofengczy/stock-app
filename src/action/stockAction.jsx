export const doTest = () => ({
  type: 'stock/doTest',
  payload: {
    test: 'hello web',
  },
});

export const addTrader = params => ({
  type: 'stock/addTrader',
  payload: params,
});

export const listTrader = params => ({
  type: 'stock/listTrader',
  payload: params,
});

export const getStock = params => ({
  type: 'stock/getStock',
  payload: params,
});

export const deleteTrader = params => ({
  type: 'stock/deleteTrader',
  payload: params,
});

export const editStock = params => ({
  type: 'stock/editStock',
  payload: params,
});
