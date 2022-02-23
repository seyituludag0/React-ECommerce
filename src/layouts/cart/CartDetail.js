import React, { useEffect, useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartContextValue } from "../../contexts/ContextProvider";
import { HttpPostWithToken } from "../../configs/HttpConfig";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import CampaignManangementService from "../../services/CampaignManagementService";
import { Form, Input } from "semantic-ui-react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CartService from "../../services/CartService";
import ProductService from "../../services/ProductService";
import { useUserContext } from "../../contexts/UserContext";

export default function CartDetail() {
  const [countValue, setCountValue] = useState(1);
  const [state] = useUserContext();
  const userId = localStorage.getItem("userId");
  // const [cartData, dispatch] = CartContextValue();
  const [couponCodeApplied, setCouponCodeApplied] = useState(false);
  const [product, setProduct] = useState([]);
  const [campaign, setCampaign] = useState({});
  const [cartData, setCartData] = useState([]);

  let productService = new ProductService();
  let cartService = new CartService();

  useEffect(() => {
    cartService
      .getCartsByUserId(userId)
      .then((result) => setCartData(result.data));
  }, [cartData]);

  const getTotalAmount = () => {
    return cartData.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  const couponCodeApply = () => {
    setCouponCodeApplied(true);
  };
  const getDiscountedAmount = () => {
    // Matematiksel hesaplama formülü: İndirim Oranı = Toplam Fiyat * İndirim Oranı / 100 || Toplam Fiyat - İndirimli Fiyat
    const discountRate = campaign.discountRate;
    const totalFiyat = getTotalAmount();

    const discountPrice = (totalFiyat * discountRate) / 100;

    const discountedPrice = totalFiyat - discountPrice;

    return discountedPrice;
  };

  const removeItem = (cartObj, e) => {
    let obj = { cartId: cartObj.productId, userId: userId };
    cartService
      .removeProductFromCart(obj.cartId, obj.userId)
      .then((result) => toast.success(result.message))
  };

  //DISCOUNT
  const formik = useFormik({
    initialValues: {
      couponCode: "",
    },
    onSubmit: (couponCode) => {
      // console.log(couponCode);
      let campaignManangementService = new CampaignManangementService();
      campaignManangementService
        .getByCouponCode(couponCode.couponCode)
        .then((campaign) => setCampaign(campaign.data.data));
      campaignManangementService
        .verifyCouponCode(couponCode.couponCode)
        .then((result) => toast.success(result.data.message));
        cartService.applyDiscountedPrice(15,50).then((result)=>result.data.message)
      couponCodeApply();
    },
  });
  //DISCOUNT

  const deleteAllCartByUserId = (userId) => {
    cartService
      .deleteAllCartByUserId(userId)
      .then((result) => toast.success(result.data.message));
  };

  // Birim fiyatını sabit tutup önceden girecek
  // (Girdiği veya artırdığı her sayıyı birim fiyatla çarpacak) toplamı fiyat hanesine yazdıracak yani toplam fiyat olacak.

  const incrementQuantityChange = (cartObj) => {
    productService.getByProductId(cartObj.productId)
      .then((result) => setProduct(result.data));
    const cartObjQuantity = cartObj.quantity;
    const totalQuantity = cartObjQuantity + 1;

    let unitPrice = cartObj.product.price;
    // console.log("104.satırdaki kod", unitPrice);
    let totalPrice = unitPrice * totalQuantity;
    let obj = {
      cartId: cartObj.id,
      quantity: totalQuantity,
      price: totalPrice,
      userId: userId
    };
    console.log("Birim Fiyat:", unitPrice);
    console.log("Toplam Fiyat:", totalPrice);
    cartService
      .updateQuantityForCart(obj)
      .then((result) => {
        toast.success(result.message)
        setCountValue(countValue + 1);
      }).catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  const decrementQuantityChange = (cartObj) => {
    productService
      .getByProductId(cartObj.productId)
      .then((result) => setProduct(result.data.data));
    const cartObjQuantity = cartObj.quantity;
    const totalQuantity = cartObjQuantity - 1;
    console.log(totalQuantity);

    let unitPrice = product.price;
    console.log("136.satırdaki kod", unitPrice);
    let totalPrice = unitPrice * totalQuantity;
    if (totalQuantity == 0) {
      removeItem(cartObj);
      // <DeleteProductFromCart />
    }
    let obj = {
      cartId: cartObj.id,
      quantity: totalQuantity,
      price: totalPrice,
    };
    console.log("Birim Fiyat:", unitPrice);
    console.log("Toplam Fiyat:", totalPrice);
    cartService
      .updateQuantityForCart(obj)
      .then((result) => {
        toast.success(result.message)
        setCountValue(countValue - 1);
      }).catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  return (
    <div>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                {cartData.length != 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Ürün</th>
                        <th>Adet</th>
                        <th>Toplam Fiyat</th>
                        <th />
                      </tr>
                      <div
                        className="continue__btn update__btn"
                        style={{ float: "right !important" }}
                      >
                        <a
                          href="javascript:void(0)"
                          onClick={() => deleteAllCartByUserId(userId)}
                        >
                          SEPETİ BOŞALT
                        </a>
                      </div>
                    </thead>
                    <tbody>
                      {cartData.map((product, key) => (
                        <tr key={key}>
                          <td className="product__cart__item">
                            <Link
                              to={`/product-detail/${product.productId}`}
                              style={{ color: "#000" }}
                              target="_blank"
                            >
                              <div className="product__cart__item__pic">
                                <img src={product.productImage} alt="" />
                              </div>
                              <div className="product__cart__item__text">
                                <h6>{product.productName}</h6>
                                <span>Marka: {product.brandName}</span> <br />
                                <span>
                                  Numara / Beden: {product.bodySize}
                                </span>{" "}
                                <br />
                                <span>Renk: {product.colorName}</span>
                              </div>
                            </Link>
                          </td>
                          <td clasName="quantity__item" key={product.id}>
                            <div className="sbmincart-details-quantity">
                              <ButtonGroup disableElevation variant="contained">
                                <Button
                                  onClick={() =>
                                    decrementQuantityChange(product, 1)
                                  }
                                >
                                  Azalt
                                </Button>
                                <Input
                                  style={{ fontSize: "1rem" }}
                                  value={product.quantity}
                                  size="mini"
                                  disabled
                                />
                                <Button
                                  onClick={() =>
                                    incrementQuantityChange(product, countValue)
                                  }
                                >
                                  Arttır
                                </Button>
                              </ButtonGroup>
                            </div>
                          </td>

                          <td className="cart__price">{product.price}₺</td>
                          <td className="cart__close">
                            <Close
                              style={{ cursor: "pointer" }}
                              onClick={() => removeItem(product)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>
                    Sepetinizde henüz ürün yok! Hemen ürünm eklemek için
                    ürünlere <Link to="/products">göz atın</Link>
                  </p>
                )}
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/products">Alışverişe Dön</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner" /> Sepeti Güncelle
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                  <Input
                    placeholder="Kupon Kodu"
                    error={Boolean(formik.errors.couponCode).toString()}
                    value={formik.values.couponCode}
                    name="couponCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.couponCode && formik.touched.couponCode && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.couponCode}
                    </div>
                  )}
                  <button className="primary-btn">Uygula</button>
                </Form.Field>
              </Form>
              <div className="cart__total">
                <h6>Fiyat Bilgileri</h6>
                <ul>
                  {couponCodeApplied ? (
                    <>
                      <li className="discount-li">
                      İndirim Öncesi Fiyat
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <del>{getTotalAmount()}₺</del>
                      </li>
                      <li className="discount-li">
                        İndirim Oranı<span>%{campaign.discountRate}</span>
                      </li>
                      <li className="discount-li">
                      İndirimli Fiyat <span>{getDiscountedAmount()}₺</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        Toplam Fiyat<span>{getTotalAmount()}₺</span>
                      </li>
                    </>
                  )}
                </ul>
                <Link
                  to="/cartsummary"
                  className="primary-btn"
                  style={{ color: "#fff" }}
                >
                  Devam Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
