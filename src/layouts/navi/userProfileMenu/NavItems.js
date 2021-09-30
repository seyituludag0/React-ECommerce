import React from "react";
import "../navi.css";
import cart from "../img/icon/cart.png";
import search from "../img/icon/search.png";
import MyFavorite from "../../favorite/MyFavorite"

export default function NavItems() {
  return (
    <div>
      <a href="/" className="search-switch">
        <img src={search} alt="search-icon" />
      </a>
      <MyFavorite />
      <a href="/">
        <img src={cart} alt="cart-icon" /> <span>0</span>
      </a>
      <div className="price">0.00₺</div>
    </div>
  );
}
