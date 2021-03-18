import types from './actionTypes';

export const incrementFunc = () => ({
  type: types.INR,
  payload: {value: 1},
});

export const decrementFunc = () => ({
  type: types.DCR,
  payload: {value: 1},
});
