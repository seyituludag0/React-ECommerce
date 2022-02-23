import React from "react";
import { addtoCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CartService from "../../services/CartService"
import { Label } from "semantic-ui-react";


export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();



  const handleAddToCart = (product) => {
    let cartService = new CartService();
    cartService.update(product).then((result)=>toast.success(result.data.message))
    dispatch(addtoCart(product))
  };

  return (
    <>
      <a
        className="add-cart"
        style={{ cursor: "pointer" }}
        onClick={() => handleAddToCart(product)}
      >
        + Sepete Ekle
      </a>
      <Label as='a' color='teal' tag>
        Son 10 ürün
      </Label>
    </>
  );
}
