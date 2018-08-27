export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS';
export const ADD_ITEM = 'PRODUCT/ADD_ITEM';
export const REMOVE_ITEM = 'PRODUCT/REMOVE_ITEM';

export function setProducts(products) {
  return { type: SET_PRODUCTS, products };
}

export function addItem(productId, amount) {
  return { type: ADD_ITEM, productId, amount };
}

export function removeItem(productId) {
  return { type: REMOVE_ITEM, productId };
}
