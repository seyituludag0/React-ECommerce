import React, { useEffect, useState } from "react";
import { CartContextValue } from "../../contexts/ContextProvider";
import { toast } from "react-toastify";
import CartService from "../../services/CartService";

export function ProductAddButton({ product, productId, productSizeId, productColorId }) {
  let cartService = new CartService();

  const [count, setCount] = useState(1);
  const [cartId, setCartId] = useState();
  const [productInCart, setProductInCart] = useState({});
  const [checkIfTheProductIsInTheCart, setCheckIfTheProductIsInTheCart] = useState(null)
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    cartService
      .getCartIdWithUserIdAndProductId(productId, 1)
      .then((result) => setCartId(result.data));
  }, []);

  useEffect(()=>{
    cartService.getProductInTheFromCart(productColorId, product.id, productSizeId, userId)
    .then((result)=>setCheckIfTheProductIsInTheCart(result.data))
  }, [])

  useEffect(()=>{
    cartService.getProductInTheFromCart(productColorId, product.id, productSizeId, userId)
    .then((result)=>setProductInCart(result.data))
  })

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addCartApi = (productObj) => {
    if (!checkIfTheProductIsInTheCart) {
      incrementCount();
    const totalQuantity = count;
    let unitPrice = productObj.price;
    console.log("totalQuantity: ", totalQuantity)
    let totalPrice = unitPrice * totalQuantity;
    let obj = {
      productId: productObj.id,
      quantity: totalQuantity,
      price: totalPrice,
      productSizeId: productSizeId,
      productColorId: productColorId,
      userId: userId,
    };
    cartService
      .addProduct(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
    }   else{
      // alert(productInCart?.quantity)
      const totalQuantity = productInCart?.quantity + count;
      let unitPrice = productObj.price;
      let totalPrice = unitPrice * productInCart?.quantity;
      let obj = {
        productId: productObj.id,
        quantity: totalQuantity,
        price: totalPrice,
        productSizeId: productSizeId,
        productColorId: productColorId,
        userId: userId,
      };
      cartService
      .addProduct(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
    } 
  };

  const sepeteEkle = () => {
      addCartApi(product);
    }
  

  return (
    <div>
      <div className="product__details__cart__option">
        <div className="quantity">
          <div className="pro-qty">
            <input type="number" defaultValue={1} />
          </div>
        </div>
        <a
          className="primary-btn"
          onClick={() => sepeteEkle()}
          style={{ cursor: "pointer" }}
        >
          Sepete Ekle
        </a>
      </div>
    </div>
  );
}

export function ProductCannotBeAddedCart() {
  return(
      <>
     <div className="product__details__cart__option">
        <button disabled 
          className="primary-btn"
          style={{ cursor: "not-allowed" }}
        >
          Sepete Ekle
        </button>
      </div>
      </>
  )
}