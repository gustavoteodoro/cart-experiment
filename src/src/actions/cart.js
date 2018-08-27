export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const CLEAR_CART = 'CART/CLEAR';

export function addProduct(productId, productValue) {
  return { type: ADD_PRODUCT, productId, productValue };
}

export function clearCart() {
  return { type: CLEAR_CART };
}
