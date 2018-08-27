import { createStore, combineReducers } from 'redux';

import products from '../reducers/products';
import cart from '../reducers/cart';

const reducer = combineReducers({
  products,
  cart,
});

export const store = createStore(reducer);
