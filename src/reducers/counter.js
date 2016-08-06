import * as types from '../utils/constants';

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + Number(action.by);
    case types.DECREMENT:
      return state - Number(action.by);
    default:
      return state;
  }
};
