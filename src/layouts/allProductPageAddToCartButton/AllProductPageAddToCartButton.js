import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CartService from "../../services/CartService";
import { useDispatch } from "react-redux"
import { addtoCart } from "../../store/actions/cartAction";

export function AddToCartButton({ product, productVariantId }) {
  const [count, setCount] = useState(1)
  const [cartId, setCartId] = useState();
  const [checkIfTheProductIsInTheCart, setCheckIfTheProductIsInTheCart] = useState(null)
  const [productInCart, setProductInCart] = useState()

  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  let cartService = new CartService();

  useEffect(()=>{
    cartService.getCartId(productVariantId, userId)
    .then((result)=>setProductInCart(result.data))
  }, [])

  const addCartApi = (productObj) => {
    if (!checkIfTheProductIsInTheCart) { // sepette aynı üründen varsa/yoksa
      setCount(count + 1)
    const totalQuantity = count;
    let unitPrice = productObj.price;
    let totalPrice = unitPrice * totalQuantity;
    let obj = {
      productId: productObj.id,
      quantity: totalQuantity,
      price: totalPrice / totalQuantity,
      productVariantId: productVariantId,
      userId: userId,
    };
    cartService
      .addToCart(obj)
      .then((result) => {
        // dispatch(addtoCart(product));
        toast.success(result.data.message);
      });
    }   else{
      setCount(count + 1)
      const totalQuantity = productInCart?.quantity + count; // ÜRÜN MİKTARI
      let unitPrice = productObj.price; //ÜRÜN BİRİM FİYATI
      let totalPrice = unitPrice * productInCart?.quantity; // TOPLAM FİYAT
      let obj = {
        productId: productObj.id,
        quantity: totalQuantity,
        price: totalPrice / productInCart?.quantity,
        productVariantId: productVariantId,
        userId: userId,
      };
      cartService
      .addToCart(obj)
      .then((result) => {
        // dispatch(addtoCart(product));
        toast.success(result.data.message);
      });
    } 
  };

  // const handleAddToCart = (product) => {
  //   dispatch(addtoCart(product));
  // }


  const sepeteEkle = () => {
    addCartApi(product);
    // dispatch(addtoCart(product));
  };

  return (
    <div>
      <a
        className="add-cart"
        style={{ cursor: "pointer" }}
        onClick={() => sepeteEkle()}
        href="javascript:void(0)"
      >
        + Sepete Ekle
      </a>
    </div>
  );
}

export function CannotBeAddedCart() {
  return (
    <div>
      <a
        className="add-cart"
        style={{ color: "gray", cursor: "not-allowed" }}
        href="javascript:void(0)"
      >
        + Sepete Ekle
      </a>
    </div>
  );
}
