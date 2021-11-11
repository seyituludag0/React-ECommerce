import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cart";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let sock = state.cartItems.find((b) => b.sock.id === payload.id);
      if (sock) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { sock: payload }],
        };
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((j) => j.sock.id !== payload.id),
      };

    default:
      return state;
  }
}
