import React from "react";
import "../navi.css";
import cart from "../img/icon/cart.png";
import search from "../img/icon/search.png";
import MyFavorite from "../../favorite/MyFavorite";
import SearchBar from "../../searchBar/SearchBar";
import CartPreview from "../../basket/CartPreview";

export default function NavItems() {
  return (
      <div className="nav-itemssssssssssssss" style={{marginRight:"-95px"}}>
      <a>
      <SearchBar />
      </a>
        <MyFavorite />
        <a>
          <CartPreview />
        </a>
      </div>
  );
}
