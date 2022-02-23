import React, { useEffect, useState } from "react";
import { CartContextValue } from "../../contexts/ContextProvider";
import { toast } from "react-toastify";
import CartService from "../../services/CartService";

export default function DetailPageProductAddButton({ product, productId, productSizeId, productColorId }) {
  let cartService = new CartService();

  const [countValue] = useState(1);
  const [isCheck, setIsCheck] = useState(null);
  const [artacakDeger, setArtacakDeger] = useState(1);
  const [baseQuantity] = useState(1);

  const [cartId, setCartId] = useState();
  const [productInCart, setProductInCart] = useState({});

  

  useEffect(() => {
    cartService
      .userIdGetCartId(productId, 1)
      .then((result) => setCartId(result.data));
    cartService
      .existsByUserIdAndProductId(productId, 1)
      .then((result) => setIsCheck(result.data));
    cartService
      .getCartByUserIdAndProductId(productId, 1)
      .then((result) => setProductInCart(result.data));
  }, []);

  const addCartApi = (productObj) => {
    console.log("Eklenecek obj: " + productObj)
    setArtacakDeger(baseQuantity + 1);
    let obj = {
      userId: 1,
      productId: productObj.id,
      productSizeId: productSizeId,
      productColorId: productColorId,
      quantity: baseQuantity,
      price: productObj.price,
    };
    cartService
      .addProduct(obj)
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch(function (res) {
        console.log("Error ", res);
        // alert(error.message);
      });
  };

  const incrementQuantityChange = (cartObj) => {
    // setToplamUrunAdedi(toplamUrunAdedi + 1)
    const totalQuantity = productInCart.quantity + 1;
    let unitPrice = cartObj.price;
    let totalPrice = unitPrice * totalQuantity;
    let obj = {
      cartId: cartId,
      userId: 1,
      productSizeId: productSizeId,
      productColorId: productColorId,
      quantity: totalQuantity,
      price: totalPrice,
    };
    cartService
      .updateQuantityForCart(obj)
      .then((result) => {
        toast.success(result.message);
      })
      .catch(function (res) {
        console.log("Error ", res);
        //  alert(error.message);
      });
  };

  const sepeteEkle = () => {
    if (!isCheck) {
      addCartApi(product);
    } else {
      toast.info("Sepetiniz Güncellendi");
      incrementQuantityChange(product, countValue);
    }
  };

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
