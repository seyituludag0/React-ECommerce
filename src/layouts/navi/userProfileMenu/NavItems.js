import React from "react";
import "../navi.css";
import cart from "../img/icon/cart.png";
import search from "../img/icon/search.png";
import MyFavorite from "../../favorite/MyFavorite";
import Basket from "../../basket/Basket";

export default function NavItems() {
  return (
    <div>
      <a href="/" className="search-switch">
        <img src={search} alt="search-icon" />
      </a>
      <MyFavorite />
      <a>
        <Basket />
      </a>
    </div>
  );
}
