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
