import React, { useState, useEffect } from "react";
import "./home.css";
import ProductService from "../../services/ProductService";
import FavoriteService from "../../services/FavoriteService";
import CategoryService from "../../services/CategoryService";
import CampaignManagementService from "../../services/CampaignManagementService";
import { Rating } from "semantic-ui-react";
import search from "../../components/product/img/icon/search.png";
import compare from "../../components/product/img/icon/compare.png";
import { Link } from "react-router-dom";
import { CartContextValue } from "../../contexts/ContextProvider";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { toast } from "react-toastify";
import { Grid, Image } from "semantic-ui-react";
import CampaignLeftBanner from "../campaigns/campaignbanners/CampaignLeftBanner"
import CampaignRightBanner from "../campaigns/campaignbanners/CampaignRightBanner"


export default function HomeProducts() {

  const [mainProducts, setMainProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartData, dispatch] = CartContextValue();
  let productService = new ProductService();
  let categoryService = new CategoryService();
  let favoriteService = new FavoriteService();

  useEffect(() => {
    productService.getMainProducts().then((result) => setMainProducts(result.data.data));
    categoryService.getAllCategory().then((result) => setCategories(result.data.data));
  }, []);

  const handleAddFavorite = (productId) => {
    // favoriteService.addFavorites(121, productId).then((result) => toast.success(result.data.message));
    favoriteService
      .existsByCustomerIdAndProductId(121, productId)
      .then((result) => toast.success(result.data.message));
  };

  const addCartApi = (productObj) => {
    let obj = {
      productId: productObj.id,
      quantity: 1,
      price: productObj.price,
    };
    HttpPostwithToken("addToCart/addProduct", obj)
      .then((res) => {
        console.log("obj", obj);
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            toast.success("Ürün sepetinize eklendi");
          } else {
            toast.error(data.message);
          }
        });
      })
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:8080/api/products/";
    if (categoryId) {
      url += "getProductByCategoryId?categoryId=" + categoryId;
    }
    productService
      .getProductByCategoryId(categoryId)
      .then((result) => setMainProducts(result.data.data));
  };

  const changeCategory = (category) => {
    getProducts(category.id);
  };



  return (
    <div>
      <Grid celled="internally">
        <Grid.Row>
          <CampaignLeftBanner />
          <Grid.Column width={10}>
            <section className="tabs_pro py-md-5 pt-sm-3 pb-5">
              <h5 className="head_agileinfo text-center text-capitalize pb-5">
                <span style={{ color: "#4043bf" }}>B</span>aşlıca Ürünlerimiz
              </h5>
              <div className="tabs tabs-style-line pt-md-5">
                <nav className="container">
                  <ul
                    id="clothing-nav"
                    className="nav nav-tabs tabs-style-line"
                    role="tablist"
                  >
                    {categories.map((category, key) => (
                      <li
                        className="nav-item"
                        key={key}
                        style={{ cursor: "pointer" }}
                        onClick={() => changeCategory(category)}
                      >
                        <a className="nav-link active">
                          {category.name} Ürünleri
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div style={{ display: "flex" }}>
                  {mainProducts.map((product, key) => (
                    <div className="product__item" key={key}>
                      <div className="product__item__pic set-bg">
                        <img src={product.productImage?.image1} alt={product.name} />
                        <ul className="product__hover">
                          <li>
                            <a onClick={() => handleAddFavorite(product.id)}>
                              <img
                                id="myFavorite"
                                src="https://res.cloudinary.com/uludag-sock/image/upload/v1632920818/empytFavorite_gmr0mu.png"
                                // onClick={() => alert("Favorited")}
                                alt="favorite-icon"
                              />
                              <span style={{ left: "-8rem" }}>
                                Favorilerime Ekle
                              </span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <img
                                src={compare}
                                alt="compare-icon"
                                style={{ cursor: "pointer" }}
                              />
                              <span>Karşılaştır</span>
                            </a>
                          </li>
                          <li>
                            <Link to={`/product-detail/${product.id}`}>
                              <img src={search} alt="search-icon" />
                              <span style={{ left: "-7rem" }}>
                                Detayları Gör
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6> {product.name} </h6>
                        <a
                          onClick={() => addCartApi(product)}
                          href="javascript:void(0)"
                        >
                          + Sepete Ekle
                        </a>
                        <div className="rating">
                          <Rating icon="star" defaultRating={3} maxRating={5} />
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
                  ))}
                </div>
              </div>
            </section>
          </Grid.Column>
          <CampaignRightBanner />
        </Grid.Row>
      </Grid>
    </div>
  );
}
