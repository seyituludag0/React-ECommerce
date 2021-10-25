import { Box } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  ButtonContent,
  Form,
  Input,
  Modal,
  Pagination,
  Rating,
} from "semantic-ui-react";
import FavoriteService from "../../services/FavoriteService";
import SockService from "../../services/SockService";
import "./style.css";
import compare from "../../components/sock/img/icon/compare.png";
import search from "../../components/sock/img/icon/search.png";
import { Link } from "react-router-dom";
import AddToBasketButton from "../basketButton/AddToBasketButton";
import { Cancel } from "@material-ui/icons";

export default function SearchBar() {
  let sockService = new SockService();
  let favoriteService = new FavoriteService();

  const [filteredSock, setFilteredSock] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [activePage, setActivePage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      sockService.searchKeyword("E", activePage, pageSize)
        .then((result) => setFilteredSock(result.data.data))
        .catch("HATA!");
      console.log(filteredSock);
    },
  });

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  let pageAble = (pageNo) => {
    setPageSize(pageNo);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65rem",
    height: "45rem",
    // bgcolor: "gray",
    boxShadow: 24,
    p: 4,
  };

  const handleAddFavorite = (sockId) => {
    favoriteService
      .addFavorites(58, sockId)
      .then((result) => toast.success(result.data.message));
  };

  function dom() {
    let myFavoriteDOM = document.querySelector("#myFavorite");
    myFavoriteDOM.src =
      "https://res.cloudinary.com/uludag-sock/image/upload/v1632921673/favoriteAdded_gekw12.png";
  }

  return (
    <section>
      <div className="rt-container" style={{ marginLeft: "-3rem" }}>
        <div className="col-rt-3 equal-height">
          <div className="sb-example-3">
            <div className="search__container">
              <form onSubmit={formik.handleSubmit}>
                <input
                  id="keyword"
                  name="keyword"
                  className="search__input"
                  type="search"
                  onKeyPress={handleOpen}
                  onChange={formik.handleChange}
                  value={formik.values.keyword}
                  onBlur={formik.handleBlur}
                  placeholder="Kelime Ara..."
                />
                {/* <button style={{ color: "#000", marginTop:"-4.5rem", marginRight:"13px" }} onClick={handleOpen}>
                  Ara
                </button> */}
                {/* <Search className="search-icon" onClick={()=>alert("Cliked")}></Search> */}
              </form>
              <Modal
                className="wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
                style={{ margin: "65px 0px 0px 271px", height: "45rem" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="filtered-socks">
                    <Cancel
                      style={{
                        float: "right",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClose()}
                    />
                    <div>
                      {" "}
                      <h3 style={{ textAlign: "center" }}>
                        Aramanızla ilgili bulunanlar
                      </h3>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
                        {filteredSock.map((sock) => (
                          <div className="product__item" key={sock.id}>
                            <div className="product__item__pic set-bg">
                              <img
                                src={sock.sockImage?.image1}
                                alt={sock.name}
                              />
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
                                <Rating
                                  icon="star"
                                  maxRating={5}
                                  defaultRating={1}
                                />
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
                      {filteredSock.length > 0 ? (
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
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
