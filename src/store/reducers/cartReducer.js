import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cart";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
    
      if (product) {
        // alert("Bu üründen sepette var adet sayısı arttırılıyor")
        product.quantity++;
        let totalPrice = payload.price * product.quantity;
        return {
          ...state,
          cartItems: [{ quantity:product.quantity,  product: payload, price:totalPrice, userId:1 }]
        };
        
      } else {
        // alert("Bu üründen sepette hiç yok ilk defa ekleniyor")
        // sepette ekleyeceği ürün yoksa
        let totalPrice = payload.price * 1;
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity:1, product: payload, price:totalPrice, userId:1 }],
        };
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
