import { ADD_PRODUCT, CLEAR_CART } from '../actions/cart';

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
        amount: 1,
      }];
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
}
