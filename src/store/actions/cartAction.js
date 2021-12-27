export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function addtoCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
}
