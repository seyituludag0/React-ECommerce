import React, { useEffect, useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./basket.css";
import { CartContextValue } from "../../contexts/ContextProvider";

export default function BasketDetail() {

  const [cartData, dispatch] = CartContextValue();

  const getTotalAmount=()=>{
    return cartData.cartItems.reduce((prevValue,currentValue)=>prevValue+currentValue.price,0);
  }


  return (
    <div>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
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
                  {cartData.cartItems.map((sock) => (
                    <tr>
                          <td className="product__cart__item">
                          <Link to={`/sock-detail/${sock.id}`} style={{ color: "#000" }} target="_blank">
                            <div className="product__cart__item__pic">
                              <img src={sock.productImage} alt="" />
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{sock.sockName}</h6>
                              <span>Marka: {sock.brandName}</span> <br />
                              <span>Numara / Beden: {sock.bodySize}</span> <br />
                              <span>Renk: {sock.colorName}</span>
                            </div>
                            </Link>
                          </td>
                          <td clasName="quantity__item">
                            <div className="quantity-input">
                              <button className="quantity-input__modifier quantity-input__modifier--left">
                                -
                              </button>
                              <input
                                className="quantity-input__screen"
                                type="text"
                                defaultValue="1"
                              />
                              <button className="quantity-input__modifier quantity-input__modifier--right">
                                +
                              </button>
                            </div>
                          </td>
                          <td className="cart__price">{sock.price}₺</td>
                          <td className="cart__close">
                            <Close
                              style={{ cursor: "pointer" }}
                              onClick={() => alert("Removed")}
                            />
                          </td>
                        </tr>
                  ))}
                  </tbody>
                </table>
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
                    Aratoplam <span>169.50₺</span>
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
