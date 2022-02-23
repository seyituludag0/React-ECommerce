import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CartService from "../../services/CartService"

export default function AllProductPageAddToCartButton({ product, productSizeId, productColorId }) {

  const [countValue, setCountValue] = useState(1)
  const [isCheck, setIsCheck] = useState(null);
  const [artacakDeger, setArtacakDeger] = useState(1)
  const [baseQuantity, setBaseQuantity] = useState(1)
  const [toplamUrunAdedi, setToplamUrunAdedi] = useState(1)
  const [cartId, setCartId] = useState()
  const [productInCart, setProductInCart] = useState({})
  const userId = localStorage.getItem("userId");
  let cartService = new CartService();

  useEffect(()=>{
    cartService.userIdGetCartId(product.id, userId).then((result)=>setCartId(result.data));
    cartService.existsByUserIdAndProductId(product.id, userId).then((result)=>setIsCheck(result.data));
    cartService.getCartByUserIdAndProductId(product.id, userId).then((result)=>setProductInCart(result.data));
  },[])
  
  const addCartApi = (productObj) => {
    setArtacakDeger(baseQuantity + 1)
    let obj = {
      productId: productObj.id,
      quantity: baseQuantity,
      price: productObj.price,
      productSizeId: productSizeId,
      productColorId: productColorId,
      userId:userId
    };
    cartService.addProduct(obj).then((result) => {
         toast.success(result.data.message)
    })
      .catch(function (res) {
        console.log("Error ", res);
        // alert(error.message);
      });
  };

  
  const incrementQuantityChange = (cartObj) => {
    // setToplamUrunAdedi(toplamUrunAdedi + 1)
    const totalQuantity = productInCart.quantity + 1
    let unitPrice = cartObj.price;
    let totalPrice = unitPrice * totalQuantity;
    let obj = { cartId: cartId, userId:userId, quantity: totalQuantity, price: totalPrice };
    cartService.updateQuantityForCart(obj).then((result) => {
      toast.success(result.message)
 })
   .catch(function (res) {
     console.log("Error ", res);
    //  alert(error.message);
   });
  };

  const sepeteEkle = () => {
    if (!isCheck) {
      addCartApi(product)
    } else {
      toast.info("Sepetiniz Güncellendi")
      incrementQuantityChange(product, countValue)
    }
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
