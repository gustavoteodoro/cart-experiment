export const SET_PRODUCTS = 'PRODUCT/SET_PRODUCTS';
export const REMOVE_ITEM = 'PRODUCT/REMOVE_ITEM';

export function setProducts(products) {
  return { type: SET_PRODUCTS, products };
}

export function removeItem(productId) {
  return { type: REMOVE_ITEM, productId };
}
