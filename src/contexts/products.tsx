import { createContext, FC, useContext, useReducer } from 'react';
import productsReducer from '../reducers/products.ts';
type ProductsContext = {
  productsLoading: boolean;
  productsError: any;
  products: any[];
  featuredProducts: any[];
  singleProductLoading: boolean;
  singleProduct: any;
};
const initialState: ProductsContext = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProduct: {},
};

const ProductsContext = createContext<ProductsContext>(initialState);

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