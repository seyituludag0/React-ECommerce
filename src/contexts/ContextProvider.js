import React, { createContext, useContext, useReducer } from "react";

//Cart adında bir context oluşturuyoruz.
let CartContext = createContext();

//Başlangıçta sepetin ilk durumunu belirtiyoruz.
export const cartState = {
  cartItems: []
};

//sepet ekleme ve güncelleme işlemlerini gerçekleştirecek olan kod bloklarını yazıyoruz.
export const reducer = (state, action) => {
  switch (action.type) {
    case "add_cart":
      return { cartItems: [...action.data] };
      break;
    case "delete_cart":
      // return { cartItems: [] }
      break;
    default:
      return state;
  }
};
//cart context provider
export const ContextProvider = ({ cartState, reducer, children }) => {
  return (
    <CartContext.Provider value={useReducer(reducer, cartState)}>
      {children}
    </CartContext.Provider>
  );
};
//accssing the cart context inside the components..
export const CartContextValue = () => useContext(CartContext);
