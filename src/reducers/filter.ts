import { FilterState, Product } from '../types';
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

const filterReducer = (state: FilterState, action: any): FilterState => {
  if (action.type === LOAD_PRODUCTS) {
    const productPrices = action.payload.map((p: any) => p.price);
    const maxPrice = Math.max(...productPrices);
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      gridView: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      gridView: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts: Product[] = [...allProducts];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.startsWith(text),
      );
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category,
      );
    }
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company,
      );
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) =>
        product.colors.includes(color),
      );
    }
    tempProducts = tempProducts.filter((product) => product.price <= price);
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true,
      );
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        minPrice: 0,
        maxPrice: 0,
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }

  throw new Error(`No mathing ${action.type} - action type!`);
};

export default filterReducer;
