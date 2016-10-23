import {INCREMENT, DECREMENT} from '../utils/constants';

export function increment(by) {
  return {
    type: INCREMENT,
    by
  };
}

export function decrement(by) {
  return {
    type: DECREMENT,
    by
  };
}
