import {INCREMENT, DECREMENT} from '../utils/constants';

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + Number(action.by);
    case DECREMENT:
      return state - Number(action.by);
    default:
      return state;
  }
};
