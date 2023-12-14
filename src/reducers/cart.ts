import { ADD_TO_CART } from '../actions.ts';
import { Cart } from '../types';

const cartReducer = (state: Cart, action: any): Cart => {
  if (action.type === ADD_TO_CART) {
    return state;
  }
  return state;
};

export default cartReducer;
