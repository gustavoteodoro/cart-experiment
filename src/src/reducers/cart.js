import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from '../actions/cart';

const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const itemAdded = state.find(item => action.productId === item.id);
      if (itemAdded) {
        const currentAmount = itemAdded.amount;
        Object.assign(itemAdded, { amount: currentAmount + 1 });
        return [...state];
      }
      return [...state, {
        id: action.productId,
        value: action.productValue,
        title: action.productTitle,
        amount: 1,
      }];
    }
    case REMOVE_PRODUCT: {
      const itemRemoved = state.find(item => action.productId === item.id);
      if (itemRemoved.amount === 1) {
        const currentAmount = itemRemoved.amount;
        Object.assign(itemRemoved, { amount: currentAmount - 1 });
        return [...state];
      }
      return state.filter(f => f.id !== action.productId);
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
}
