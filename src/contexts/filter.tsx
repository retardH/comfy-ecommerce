import { FilterState } from '../types';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useProductsContext } from './products.tsx';
import filterReducer from '../reducers/filter.ts';
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../actions.ts';

const initialState: FilterState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
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
  setGridView: () => void;
  setListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters: (
    e:
      | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  clearFilters: () => void;
};

const FilterContext = createContext<FilterContextState>(
  {} as FilterContextState,
);

type FilterProviderProps = {
  children: React.ReactNode;
};
export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const {
    text,
    price,
    minPrice,
    maxPrice,
    color,
    company,
    shipping,
    category,
  } = state.filters;
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [
    products,
    state.sort,
    text,
    price,
    minPrice,
    maxPrice,
    color,
    company,
    shipping,
    category,
  ]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | any,
  ) => {
    const name = e.target.name;
    let value: string | number | boolean = e.target.value;
    if (name === 'category') {
      value = e.target.textContent!;
    }
    if (name === 'color') {
      value = e.target.dataset.color!;
    }
    if (name === 'price') {
      value = Number(value)!;
    }
    if (name === 'shipping') {
      value = (e.target as any).checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
