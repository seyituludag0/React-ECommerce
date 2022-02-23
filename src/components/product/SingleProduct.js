import React, { useState, useEffect } from "react";
import "./single-product.css"
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  addToComparison,
  removeToComparison,
} from "../../store/actions/compareAction";
import disCompare from "./img/icon/discompare.png";
import compare from "./img/icon/compare.png";
import search from "./img/icon/search.png";
import favoriteAdded from "./img/icon/favoriteAdded.png";
import empytFavorite from "./img/icon/empytFavorite.png";
import FavoriteService from "../../services/FavoriteService";
import ProductService from "../../services/ProductService";
import CommentService from "../../services/CommentService";
import AllProductPageAddToCartButton from "../../layouts/allProductPageAddToCartButton/AllProductPageAddToCartButton";
import { Label } from "semantic-ui-react";
import ColorService from "../../services/ColorService";
import ProductSizeService from "../../services/ProductSizeService";

export default function SingleProduct({ productss }) {
  let favoriteService = new FavoriteService();
  let productService = new ProductService();
  let commentService = new CommentService();
  let colorService = new ColorService();
  let productSizeService = new ProductSizeService();

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [addedCompare, setAddedCompare] = useState(false);
  const [addedFavorite, setAddedFavorite] = useState(false);
  const [activePage] = useState(1);
  const [pageSize] = useState(2);
  const [productStarAverage, setProductStarAverage] = useState(0);
  const [colors, setColors] = useState([]);
  const [currentProductColor, setCurrentProductColor] = useState(null);
  const [productSizes, setProductSizes] = useState([]);
  const [currentProductSize, setCurrentProductSize] = useState(null);

  console.log("Ürün Bedeni: " + currentProductSize?.size)
  console.log("Ürün Rengi: " + currentProductColor?.name)
  const product = productss;
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    productService
      .getAllPagination(activePage, pageSize)
      .then((result) => setProducts(result.data.data));
  }, [activePage, pageSize]);

  useEffect(() => {
    colorService.getAll().then((result) => setColors(result.data.data));
    productSizeService.getAll().then((result)=>setProductSizes(result.data.data))
    commentService
      .getProductStarAverage(product.id)
      .then((result) => setProductStarAverage(result.data));
  }, []);

  const handleAddFavorite = (productId) => {
    setAddedFavorite(true);
    favoriteService
      .addFavorites(userId, productId)
      .then((result) => toast.success(result.data.message));
  };

  const handleRemoveFromFavorite = (productId) => {
    setAddedFavorite(false);
    favoriteService
      .removeFromFavorites(userId, productId)
      .then((result) => toast.success("Favorilerinizden kaldırıldı"));
  };

  const checkFavoriteByCustomer = (productId) => {
    favoriteService
      .existsByCustomerIdAndProductId(userId, productId)
      .then((result) => console.log(result.data));
  };

  const addToCompareProduct = (product) => {
    setAddedCompare(true);
    dispatch(addToComparison(product));
  };

  const removeToCompareProduct = (product) => {
    setAddedCompare(false);
    dispatch(removeToComparison(product));
  };

  const favoriteFunctions = () => {
    handleAddFavorite(product.id);
    checkFavoriteByCustomer(product.id);
  };

  return (
    <div>
      <div className="product__item" key={product.id}>
        <div className="product__item__pic set-bg">
          <img src={product.productImage.image1} alt={product.name} />
          {product.unitsInStocks <= 10 ? (
            <Label color="black" tag>
              Son {product.unitsInStocks} ürün
            </Label>
          ) : null}
          <Label color="blue">{product.price}₺</Label>
          <ul className="product__hover">
            <li>
              {addedFavorite ? (
                <>
                  <img
                    src={favoriteAdded}
                    alt="compare-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveFromFavorite(product.id)}
                  />
                  <span>Kaldır</span>
                </>
              ) : (
                <>
                  <img
                    src={empytFavorite}
                    alt="compare-icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => favoriteFunctions()}
                  />
                  <span>Favorilere Ekle</span>
                </>
              )}
            </li>
            <li>
              {addedCompare ? (
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
              <Link to={`/product-detail/${product.id}`}>
                <img src={search} alt="search-icon" />
                <span style={{ left: "-7rem" }}>Detayları Gör</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6> {product.name} </h6>
          {/* <AllProductPageAddToCartButton product={product} productSizeId={currentProductSize?.id} productColorId={currentProductColor?.id} /> */}
          {
            currentProductSize===null || currentProductColor===null ? null : <AllProductPageAddToCartButton product={product} productSizeId={currentProductSize?.id} productColorId={currentProductColor?.id} />
          }
            <Rating
              size="small"
              name="read-only"
              value={parseFloat(productStarAverage)}
              precision={0.5}
              readOnly
            />
          
          <div className="product__size__select">
          {productSizes.map((productSize, key) => (
              <Label color={currentProductSize?.id === productSize.id ? "black" : ""} key={key} circular size="mini" title={`${productSize.size}`} style={{fontSize:"8.1px", cursor:"pointer"}}
              onClick={()=> setCurrentProductSize(productSize)}
              >
        {productSize.size}
      </Label>
            ))}
          </div>
          <div className="product__color__select">
            {colors.map((color, key) => (
              <label key={key}
              className={currentProductColor?.id === color.id ? "selectedColor" : ""}
                style={{ backgroundColor: `${color.colorCode}` }}
                title={`${color.name}`}
                onClick={() => setCurrentProductColor(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
