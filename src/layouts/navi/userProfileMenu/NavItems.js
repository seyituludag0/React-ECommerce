import React from "react";
import MyFavorite from "../../favorite/MyFavorite";
import SearchBar from "../../searchBar/SearchBar";
import CartPreview from "../../cart/CartPreview";

export default function NavItems() {
  return (
      <div className="nav-items" style={{marginRight:"-95px"}}>
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
