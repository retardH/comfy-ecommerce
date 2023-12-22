import { ADD_TO_CART } from '../actions.ts';
import { Cart } from '../types';

const cartReducer = (state: Cart, action: any): Cart => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      console.log('cart already has items');
      const tempCart = state.cart.map((item) => {
        if (tempItem.id === item.id) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0],
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    return state;
  }
  return state;
};

export default cartReducer;
