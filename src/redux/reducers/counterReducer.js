import types from '../actionTypes';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.INR:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case types.DCR:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
}
