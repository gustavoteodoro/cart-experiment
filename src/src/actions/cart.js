export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';
export const CLEAR_CART = 'CART/CLEAR';

export function addProduct(productId, productValue, productTitle) {
  return {
    type: ADD_PRODUCT, productId, productValue, productTitle,
  };
}

export function removeProduct(productId, productValue, productTitle, amountToRemove) {
  return {
    type: REMOVE_PRODUCT, productId, productValue, productTitle, amountToRemove,
  };
}

export function clearCart() {
  return { type: CLEAR_CART };
}
