export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function addtoCart(sock) {
  return {
    type: ADD_TO_CART,
    payload: sock,
  };
}

export function removeFromCart(sock) {
  return {
    type: REMOVE_TO_CART,
    payload: sock,
  };
}
