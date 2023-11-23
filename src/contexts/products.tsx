import { createContext, FC, useContext, useReducer } from 'react';
import productsReducer from '../reducers/products.ts';
import { ProductsState } from '../types';

const initialState: ProductsState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProduct: {},
};

type ProductsContextState = ProductsState & {
  fetchSingleProduct: any;
};
const ProductsContext = createContext<ProductsContextState>(
  {} as ProductsContextState,
);

type ProductsProviderProps = {
  children: React.ReactNode;
};
const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };