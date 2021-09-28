import React, { useState, useEffect } from "react";
import "./sock.css";
import SockService from "../../services/SockService";
import CategoryService from "../../services/CategoryService";
import search from "../sock/img/icon/search.png";
import heart from "../sock/img/icon/heart.png";
import compare from "../sock/img/icon/compare.png";
import { Link } from "react-router-dom";
import { Rating, Grid } from "semantic-ui-react";
// import Categories from "../categories/Categories";
// import Brands from "../brands/Brands";
// import MySlider from "../MySlider";
import FilterSock from "../../layouts/filterSock/FilterSock";
import FavoriteService from "../../services/FavoriteService"
import { toast } from "react-toastify";

export default function AllSock() {
  let sockService = new SockService();
  let categoryService = new CategoryService();


  const [socks, setSocks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    sockService.getAllSock().then((result) => setSocks(result.data.data));
    categoryService.getAllCategory().then((result) => setCategories(result.data.data));
  });

  const handleAddFavorite = (sockId) => {
  let favoriteService = new FavoriteService();
    favoriteService.addFavorites(56, sockId).then((result)=>toast.success(result.data.message))
  };

  // useEffect(() => {
  //   sockService.getByFilter(filter).then((result) => {
  //       setSocks(result.data.data);
  //     });
  // }, [filter]);

  const handleOnFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <Grid columns={3} padded>
        <Grid.Column width={3} style={{ background: "#d1d8e0" }}>
          {/* <Categories />
          <br />
          <Brands />
          <br />
          <MySlider /> */}
          <FilterSock handleOnFilter={handleOnFilter} corap={socks} />
        </Grid.Column>
        <Grid.Column width={10}>
          <section className="product">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="filter__controls">
                    {categories.map((category) => (
                      <li key={category.id}><Link to={`/category/${category.id}`} style={{textDecoration:"none", color:"#000"}}>{category.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row product__filter">
                <h3 style={{textAlign:"center"}}>Tüm Ürünler</h3>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
                  {socks.map((sock) => (
                    <div className="product__item" key={sock.id}>
                      <div className="product__item__pic set-bg">
                        <img src={sock.sockImage.image1} alt={sock.name} />
                        <ul className="product__hover">
                          <li>
                            <a onClick={()=>handleAddFavorite(sock.id)}>
                              <img src={heart} alt="heart-icon" />
                              <span style={{ left: "-8rem" }}>
                                Favorilerime Ekle
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <img src={compare} alt="compare-icon" />
                              <span>Karşılaştır</span>
                            </a>
                          </li>
                          <li>
                            <Link to={`/sock-detail/${sock.id}`}>
                              <img src={search} alt="search-icon" />
                              <span style={{ left: "-7rem" }}>
                                Detayları Gör
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6> {sock.name} </h6>
                        <a href="/" className="add-cart">
                          + Sepete Ekle
                        </a>
                        <div className="rating">
                          <Rating icon="star" defaultRating={3} maxRating={5} />
                        </div>
                        <h5> {sock.price}₺</h5>
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
        </Grid.Column>
      </Grid>
    </>
  );
}
