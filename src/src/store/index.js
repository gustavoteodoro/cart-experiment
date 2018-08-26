import { createStore, combineReducers } from 'redux';

import products from '../reducers/products';

const reducer = combineReducers({
  products,
});

export const store = createStore(reducer);
