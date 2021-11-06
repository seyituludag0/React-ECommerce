import React, { useEffect, useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./cart.css";
import { CartContextValue } from "../../contexts/ContextProvider";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { toast } from "react-toastify";

export default function CartDetail() {
  const [cartData, dispatch] = CartContextValue();
  const [optionData, setOptionData] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  const getTotalAmount = () => {
    return cartData.cartItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  const quantityChange = (cartObj, e) => {
    console.log(cartObj,e.target.value);
    let price = cartObj.price * e.target.value;
    let obj = { cartId: cartObj.id, quantity: e.target.value, price: price };
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
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  const removeItem = (cartObj, e) => {
    let obj = { cartId: cartObj.id };
    HttpPostwithToken("addToCart/removeSockFromCart", obj)
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
                    </thead>
                    <tbody>
                      {cartData.cartItems.map((sock, key) => (
                        <tr key={key}>
                          <td className="product__cart__item">
                            <Link
                              to={`/sock-detail/${sock.id}`}
                              style={{ color: "#000" }}
                              target="_blank"
                            >
                              <div className="product__cart__item__pic">
                                <img src={sock.productImage} alt="" />
                              </div>
                              <div className="product__cart__item__text">
                                <h6>{sock.sockName}</h6>
                                <span>Marka: {sock.brandName}</span> <br />
                                <span>
                                  Numara / Beden: {sock.bodySize}
                                </span>{" "}
                                <br />
                                <span>Renk: {sock.colorName}</span>
                              </div>
                            </Link>
                          </td>
                          <td clasName="quantity__item" key={sock.id}>
                            <div className="sbmincart-details-quantity">
                              <select
                                value={sock.quantity}
                                onChange={(e) => quantityChange(sock, e)}
                              >
                                {optionData.map((d, key) => (
                                  <option key={key}>{d}</option>
                                ))}
                              </select>
                            </div>
                          </td>

                          <td className="cart__price">{sock.price}₺</td>
                          <td className="cart__close">
                            <Close
                              style={{ cursor: "pointer" }}
                              onClick={() => removeItem(sock)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>
                    Sepetinizde henüz ürün yok! Hemen ürünm eklemek için
                    ürünlere <Link to="/socks">göz atın</Link>
                  </p>
                )}
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/socks">Alışverişe Dön</Link>
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
              <div className="cart__discount">
                <h6>İndirim Kodu Uygula</h6>
                <form action="#">
                  <input type="text" placeholder="Kupon Kodu" />
                  <button type="submit">Uygula</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Toplam Fiyat</h6>
                <ul>
                  <li>
                    Aratoplam <span>0₺</span>
                  </li>
                  <li>
                    Toplam <span>{getTotalAmount()}₺</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn" style={{ color: "#fff" }}>
                  Ödemeye Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
