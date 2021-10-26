import React, { useState, useEffect } from "react";
import "./sock.css";
import SockService from "../../services/SockService";
import CategoryService from "../../services/CategoryService";
import search from "../sock/img/icon/search.png";
import favoriteAdded from "../sock/img/icon/favoriteAdded.png";
import compare from "../sock/img/icon/compare.png";
import { Link } from "react-router-dom";
import { Grid, Pagination } from "semantic-ui-react";
// import Categories from "../categories/Categories";
// import Brands from "../brands/Brands";
// import MySlider from "../MySlider";
import FilterSock from "../../layouts/filterSock/FilterSock";
import FavoriteService from "../../services/FavoriteService";
import { toast } from "react-toastify";
import empytFavorite from "./img/icon/empytFavorite.png";
import AddToBasketButton from "../../layouts/basketButton/AddToBasketButton";
import CommentService from "../../services/CommentService";
import { Rating } from "@mui/material";

export default function AllSock() {
  let sockService = new SockService();
  let categoryService = new CategoryService();
  let favoriteService = new FavoriteService();

  const [socks, setSocks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let commentService = new CommentService();
    commentService.getBySockId(19)
      .then((result) => setComments(result.data.data));
  });

  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    sockService
      .getAllPagination(activePage, pageSize)
      .then((result) => setSocks(result.data.data));
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
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

  const handleOnFilter = (filter) => {
    setFilter(filter);
    console.log("filter: ", filter);
  };

  function dom() {
    let myFavoriteDOM = document.querySelector("#myFavorite");
    myFavoriteDOM.src =
      "https://res.cloudinary.com/uludag-sock/image/upload/v1632921673/favoriteAdded_gekw12.png";
  }

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  let pageAble = (pageNo) => {
    setPageSize(pageNo);
  };

  return (
    <>
      <Grid columns={3} padded>
        <Grid.Column width={3} style={{ background: "#d1d8e0" }}>
          <FilterSock handleOnFilter={handleOnFilter} corap={socks} />
        </Grid.Column>
        <Grid.Column width={10}>
          <section className="my-products">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="filter__controls">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/category/${category.id}`}
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row product__filter">
                <h3 style={{ textAlign: "center" }}>Tüm Ürünler</h3>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
                  {socks.map((sock) => (
                    <div className="product__item" key={sock.id}>
                      <div className="product__item__pic set-bg">
                        <img src={sock.sockImage?.image1} alt={sock.name} />
                        <ul className="product__hover">
                          <li>
                            <a onClick={() => handleAddFavorite(sock.id)}>
                              <img
                                id="myFavorite"
                                src="https://res.cloudinary.com/uludag-sock/image/upload/v1632920818/empytFavorite_gmr0mu.png"
                                onClick={() => dom()}
                                alt="favorite-icon"
                              />
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
                        <AddToBasketButton sock={sock} />
                        <div className="rating">
                        
                      <Rating name="read-only" value={3} readOnly />

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
            {socks.length > 0 ? (
              <div className="pageable">
                <Pagination
                  activePage={activePage}
                  onPageChange={onChange}
                  totalPages={10}
                />
              </div>
            ) : (
              <>
                <div>Maalesef bu sayfa da gösterilecek ürün yok</div>
                <Pagination
                  activePage={activePage}
                  onPageChange={onChange}
                  totalPages={10}
                />
              </>
            )}
          </section>
        </Grid.Column>
      </Grid>
    </>
  );
}
