import * as types from '../utils/constants';

export function increment(by) {
  return {
    type: types.INCREMENT,
    by
  };
}

export function decrement(by) {
  return {
    type: types.DECREMENT,
    by
  };
}
