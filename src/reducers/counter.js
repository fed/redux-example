import * as types from '../utils/constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + Number(action.by);
    case types.DECREMENT:
      return state - Number(action.by);
    default:
      return state;
  }
};
