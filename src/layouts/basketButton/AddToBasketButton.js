import React from "react";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import BasketService from "../../services/BasketService";
import { toast } from "react-toastify";


export default function AddToBasketButton({ sock }) {
  const dispatch = useDispatch();

  // const handleAddToCart = (sock) => {
  //   let basketService = new BasketService();
  //   basketService.add(sock).then((result)=>toast.success(result.data.message)) 
  //   dispatch(addtoCart(sock));
  // };

  const handleAddToCart = (sock) => {
    let basketService = new BasketService();
    basketService.update(sock).then((result)=>toast.success(result.data.message))
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
