import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductService from "/react/sock-ecommerce/src/services/ProductService";
import CategoryService from "../../services/CategoryService";
import search from "../product/img/icon/search.png";
import favoriteAdded from "./img/icon/favoriteAdded.png"
import compare from "../product/img/icon/compare.png";
import { Link } from "react-router-dom";
import { Rating } from "semantic-ui-react";
import "./product.css";

export default function ProductByCategory() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  let { categoryId } = useParams();

  let productService = new ProductService();
  let categoryService = new CategoryService();

  useEffect(() => {
    productService
      .getProductByCategoryId(categoryId)
      .then((result) => setProducts(result.data.data));
  }, []);

  useEffect(() => {
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
  }, []);

  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <ul className="filter__controls">
              <li>
                <Link to="/products" style={{ textDecoration: "none", color: "#000" }}>Tüm Ürünler</Link></li>
                {categories.map((category) => (
                    <li key={category.id}>
                    <Link to={`/category/${category.id}`} style={{ textDecoration: "none", color: "#000" }}
                  >
                    {category.name}
                  </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
            {products.map((product) => (
              <div className="product__item" key={product.id}>
                <div className="product__item__pic set-bg">
                  <img
                    className="card-img-top"
                    src={product.productImage?.image1}
                    alt="item.png"
                  />
                  <ul className="product__hover">
                    <li>
                      <a href="/">
                        <img src={favoriteAdded} alt="favorite-icon" />
                        <span style={{ left: "-8rem" }}>Favorilerime Ekle</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={compare} alt="compare-icon" style={{cursor:"pointer"}}/>
                        <span>Karşılaştır</span>
                      </a>
                    </li>
                    <li>
                      <Link to={`/product-detail/${product?.id}`}>
                        <img src={search} alt="search-icon" />
                        <span style={{ left: "-7rem" }}>Detayları Gör</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6> {product.name} </h6>
                  <a href="/" className="add-cart">
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
      </div>
    </section>
  );
}
