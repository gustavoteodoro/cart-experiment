import { SET_PRODUCTS, REMOVE_ITEM } from '../actions/products';

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.products;
    }
    case REMOVE_ITEM: {
      const currentProduct = state.find(item => action.productId === item.id);
      const currentInventory = currentProduct.inventory;
      Object.assign(currentProduct, { inventory: currentInventory - 1 });
      return [...state];
    }
    default:
      return state;
  }
}
