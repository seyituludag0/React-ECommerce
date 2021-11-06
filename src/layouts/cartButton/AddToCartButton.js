import React from "react";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CartService from "../../services/CartService"


export default function AddToCartButton({ sock }) {
  const dispatch = useDispatch();



  const handleAddToCart = (sock) => {
    let cartService = new CartService();
    cartService.update(sock).then((result)=>toast.success(result.data.message))
    dispatch(addtoCart(sock))
  };

  return (
    <>
      <a
        className="add-cart"
        style={{ cursor: "pointer" }}
        onClick={() => handleAddToCart(sock)}
      >
        + Sepete Ekle
      </a>
    </>
  );
}
