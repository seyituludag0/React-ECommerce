import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CartService from "../../services/CartService";

export function AddToCartButton({ product, productSizeId, productColorId }) {
  const [count, setCount] = useState(1)
  const [cartId, setCartId] = useState();
  const [checkIfTheProductIsInTheCart, setCheckIfTheProductIsInTheCart] = useState(null)
  const [productInCart, setProductInCart] = useState()

  const userId = localStorage.getItem("userId");
  let cartService = new CartService();


  useEffect(()=>{
    cartService.getProductInTheFromCart(productColorId, product.id, productSizeId, userId)
    .then((result)=>setCheckIfTheProductIsInTheCart(result.data))
  }, [])

  useEffect(()=>{
    cartService.getProductInTheFromCart(productColorId, product.id, productSizeId, userId)
    .then((result)=>setProductInCart(result.data))
  }, [])


  // const incrementCount = () => {
    // console.log("count: ", count)
    // setCount(count + 1);
  // };

  const addCartApi = (productObj) => {
    if (!checkIfTheProductIsInTheCart) { // sepette aynı üründen varsa
      
    const totalQuantity = count;
    let unitPrice = productObj.price;
    let totalPrice = unitPrice * totalQuantity;
    let obj = {
      productId: productObj.id,
      quantity: totalQuantity,
      price: totalPrice / totalQuantity,
      productSizeId: productSizeId,
      productColorId: productColorId,
      userId: userId,
    };
    cartService
      .addToCart(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
    }   else{
      setCount(count + 1)
      console.log("count: ", count)
      const totalQuantity = productInCart?.quantity + count; // ÜRÜN MİKTARI
      let unitPrice = productObj.price; //ÜRÜN BİRİM FİYATI
      let totalPrice = unitPrice * productInCart?.quantity; // TOPLAM FİYAT
      let obj = {
        productId: productObj.id,
        quantity: totalQuantity,
        price: totalPrice / productInCart?.quantity,
        productSizeId: productSizeId,
        productColorId: productColorId,
        userId: userId,
      };
      cartService
      .addToCart(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
    } 
  };


  const sepeteEkle = () => {
    addCartApi(product);
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
