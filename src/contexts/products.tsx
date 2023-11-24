import { createContext, FC, useContext, useEffect, useReducer } from 'react';
import productsReducer from '../reducers/products.ts';
import { ProductsState } from '../types';
import axios from 'axios';
import { products_url } from '../utils/constants.tsx';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../actions.ts';

const initialState: ProductsState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProduct: {},
};

type ProductsContextState = ProductsState & {
  fetchSingleProduct: (url: string) => void;
};
const ProductsContext = createContext<ProductsContextState>(
  {} as ProductsContextState,
);

type ProductsProviderProps = {
  children: React.ReactNode;
};
const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async (url: string) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      console.log(response);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      console.log(err);
    }
  };

  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      console.log(response);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };