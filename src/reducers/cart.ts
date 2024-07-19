import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions.ts';
import { Cart } from '../types';

const cartReducer = (state: Cart, action: any): Cart => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const itemInCart = state.cart.find((i) => i.id === id + color);
    if (itemInCart) {
      const tempCart = state.cart.map((item) => {
        if (itemInCart.id === item.id) {
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
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount;
        if (value === 'inc') {
          newAmount += 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
        } else if (value === 'dec') {
          newAmount -= 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce<Record<string, any>>(
      (total, item) => {
        const { amount, price } = item;
        total.totalItems += amount;
        total.totalAmount += price * amount;
        return total;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      },
    );
    return { ...state, totalItems, totalAmount };
  }
  throw new Error(`No matching ${action.type} - action type`);
};

export default cartReducer;
