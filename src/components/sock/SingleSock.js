import React, { useState, useEffect } from "react";
import SockService from "../../services/SockService";
import AllSockPageAddToCartButton from "../../layouts/allSockPageAddToCartButton/AllSockPageAddToCartButton";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import compare from "../sock/img/icon/compare.png";
import disCompare from "../sock/img/icon/discompare.png";
import search from "../sock/img/icon/search.png";
import FavoriteService from "../../services/FavoriteService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  addToComparison,
  removeToComparison,
} from "../../store/actions/compareAction";
import CompareTable from "./CompareTable";

export default function SingleSock({ products, addToCompare, removeToCompare }) {
  let favoriteService = new FavoriteService();
  let sockService = new SockService();

  const [socks, setSocks] = useState([]);
  const [added, setAdded] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const dispatch = useDispatch();

  const product = products;
  // console.log(product);

  useEffect(() => {
    sockService
      .getAllPagination(activePage, pageSize)
      .then((result) => setSocks(result.data.data));
  }, [activePage, pageSize]);

  const handleAddFavorite = (sockId) => {
    favoriteService
      .addFavorites(106, sockId)
      .then((result) => toast.success(result.data.message));
  };

  const removeFromFavorite = (sockId) => {
    // favoriteService.addFavorites(60, sockId).then((result)=>toast.success("Favorilerinizden kaldırıldı"))
    favoriteService
      .existsByCustomerIdAndSockId(60, sockId)
      .then((result) => toast.success("Favorilerinizden kaldırıldı"));
  };

  function dom() {
    let myFavoriteDOM = document.querySelector("#myFavorite");
    myFavoriteDOM.src =
      "https://res.cloudinary.com/uludag-sock/image/upload/v1632921673/favoriteAdded_gekw12.png";
  }

  const addToCompareProduct = (product) => {
    setAdded(true);
    console.log("added", added);
    dispatch(addToComparison(product));
  };

  const removeToCompareProduct = (product) => {
    setAdded(false);
    console.log("added", added);
    dispatch(removeToComparison(product));
  };

  return (
    <div>
      
      <div className="product__item" key={product.id}>
        <div className="product__item__pic set-bg">
          <img src={product.sockImage?.image1} alt={product.name} />
          <ul className="product__hover">
            <li>
              <a onClick={() => handleAddFavorite(product.id)}>
                <img
                  id="myFavorite"
                  src="https://res.cloudinary.com/uludag-sock/image/upload/v1632920818/empytFavorite_gmr0mu.png"
                  onClick={() => dom()}
                  alt="favorite-icon"
                />
                <span style={{ left: "-8rem" }}>Favorilerime Ekle</span>
              </a>
            </li>
            <li>
              {added ? (
                <>
                  <img
                    src={disCompare}
                    alt="compare-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeToCompareProduct(product)}
                  />
                  <span>Kaldır</span>
                </>
              ) : (
                <>
                  <img
                    src={compare}
                    alt="compare-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => addToCompareProduct(product)}
                  />
                  <span>Karşılaştır</span>
                </>
              )}
            </li>
            <li>
              <Link to={`/sock-detail/${product.id}`}>
                <img src={search} alt="search-icon" />
                <span style={{ left: "-7rem" }}>Detayları Gör</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6> {product.name} </h6>
          <AllSockPageAddToCartButton sock={product} />
          <div className="rating">
            <Rating name="read-only" value={3} readOnly />
          </div>
          <h5> {product.price}₺</h5>
          <div className="product__color__select">
            <label htmlFor="pc-4">
              <input type="radio" id="pc-4" />
            </label>
            <label className="active black" htmlFor="pc-5">
              <input type="radio" id="pc-5" />
            </label>
            <label className="grey" htmlFor="pc-6">
              <input type="radio" id="pc-6" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
