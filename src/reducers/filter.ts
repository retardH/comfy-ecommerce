import { FilterState } from '../types';
import {
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from '../actions.ts';

const filterReducer = (state: FilterState, action: any): FilterState => {
  if (action.type === FILTER_PRODUCTS) {
    return state;
  } else if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  } else if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      gridView: true,
    };
  } else if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      gridView: false,
    };
  } else if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  } else if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];
    if (sort === 'price-lowest') {
      console.log('price-lowest');
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-highest') {
      console.log('price-highest');
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-a') {
      console.log('name-a');
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sort === 'name-z') {
      console.log('name-z');
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }

  throw new Error(`No mathing ${action.type} - action type!`);
};

export default filterReducer;
