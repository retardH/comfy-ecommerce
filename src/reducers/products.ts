import { ProductsState } from '../types';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../actions.ts';

const productsReducer = (state: ProductsState, action: any): ProductsState => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  } else if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product: any) => product.featured === true,
    );
    return {
      ...state,
      products: action.payload,
      featuredProducts,
      productsLoading: false,
    };
  } else if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }
  return state;
};

export default productsReducer;