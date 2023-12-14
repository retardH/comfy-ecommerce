import { FilterState } from '../types';
import { FILTER_PRODUCTS } from '../actions.ts';

const filterReducer = (state: FilterState, action: any): FilterState => {
  if (action.type === FILTER_PRODUCTS) {
    return state;
  }
  return state;
};

export default filterReducer;
