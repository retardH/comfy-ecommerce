import { FilterState } from '../types';
import React, { createContext, FC, useReducer } from 'react';
// import { useProductsContext } from './products.tsx';
import filterReducer from '../reducers/filter.ts';

const initialState: FilterState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

type FilterContextState = FilterState & {
  setGridView: any;
  setListView: any;
  updateSort: any;
  updateFilters: any;
  clearFilters: any;
};

const FilterContext = createContext<FilterContextState>(
  {} as FilterContextState,
);

type FilterProviderProps = {
  children: React.ReactNode;
};
export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  // const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
