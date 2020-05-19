const basicModel = {
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export { basicModel };
