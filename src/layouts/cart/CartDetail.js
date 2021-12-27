import React, { useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CartContextValue } from "../../contexts/ContextProvider";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import CampaignManangementService from "../../services/CampaignManagementService";
import { Form, Input } from "semantic-ui-react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CartService from "../../services/CartService";
import { useUserContext } from "../../contexts/UserContext";

export default function CartDetail() {
  // const newQuantityNumber = 3;
  const [countValue, setCountValue] = useState(1)
  const [state] = useUserContext();
  const userId = state?.authenticatedUser?.id;
  const [cartData, dispatch] = CartContextValue();
  const [couponCodeApplied, setCouponCodeApplied] = useState(false);
  const getTotalAmount = () => {
    return cartData.cartItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  const couponCodeApply = () => {
    setCouponCodeApplied(true);
  };
  const getDiscountedAmount = () => {
    // Matematiksel hesaplama formülü: ((100 - 12) / 100) x 2000 = 1760 TL
    return cartData.cartItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      -750
    );
  };

  

  const removeItem = (cartObj, e) => {
    let obj = { cartId: cartObj.id };
    HttpPostwithToken("addToCart/removeProductFromCart", obj)
      .then((res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
          } else {
            alert(data.message);
          }
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  //DISCOUNT
  const formik = useFormik({
    initialValues: {
      couponCode: "",
    },
    onSubmit: (couponCode) => {
      console.log(couponCode);
      let campaignManangementService = new CampaignManangementService();
      campaignManangementService
        .verifyCouponCode(couponCode.couponCode)
        .then((result) => toast.success(result.data.message));
      // .finally(() => finalMyMethod());
      couponCodeApply();
    },
  });
  //DISCOUNT

  const deleteAllCartByUserId = (userId) => {
    let cartService = new CartService();
    cartService
      .deleteAllCartByUserId(userId)
      .then((result) => toast.success(result.data.message));
  };

  const incrementQuantityChange = (cartObj, count) => {
    console.log(cartObj, count);
    let price = cartObj.price *= count;
    let obj = { cartId: cartObj.id, quantity: count, price: price };
    HttpPostwithToken("addToCart/updateQuantityForCart", obj)
      .then((res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
          } else {
            alert(data.message);
          }
        setCountValue(countValue + 1)
        });
      })
      .catch(function (res) {
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
                {cartData.cartItems.length != 0 ? (
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
                      {cartData.cartItems.map((product, key) => (
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
                                <Button onClick={() => alert("Adet 1 azaltıldı")}>
                                  Azalt
                                </Button>
                                <Input
                                  value={product.quantity}
                                  size="mini"
                                  disabled
                                />
                                <Button onClick={() => incrementQuantityChange(product, countValue)}>
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
                </Form.Field>
                <button style={{ backgroundColor: "#fff" }}>Uygula</button>
              </Form>
              <div className="cart__total">
                <h6>Fiyat Bilgileri</h6>
                <ul>
                  {/* <li>
                    Aratoplam <span>0₺</span>
                  </li> */}
                  {couponCodeApplied ? (
                    <>
                      <li className="discount-li">
                        Toplam Fiyat
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <del>{getTotalAmount()}₺</del>
                      </li>
                      <li className="discount-li">
                        İndirimli Fiyat<span>{getDiscountedAmount()}₺</span>
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
