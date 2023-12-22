import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Cart } from '../types';
import cartReducer from '../reducers/cart.ts';
import { ADD_TO_CART } from '../actions.ts';

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: Cart = {
  cart: getCartFromLocalStorage(),
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

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: any,
  ) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id: string) => {
    console.log(id);
  };

  const toggleAmount = (id: string, value: any) => {
    console.log(id, value);
  };

  const clearCart = () => {};

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
