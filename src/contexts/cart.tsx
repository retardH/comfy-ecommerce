import React, { createContext, FC, useReducer } from 'react';
import { Cart } from '../types';
import cartReducer from '../reducers/cart.ts';

const initialState: Cart = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

type CartContextState = Cart & {
  addToCart: any;
  removeItem: any;
  toggleAmount: any;
  clearCart: any;
};
const CartContext = createContext<CartContextState>({} as CartContextState);

type CartProviderProps = {
  children: React.ReactNode;
};
export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
