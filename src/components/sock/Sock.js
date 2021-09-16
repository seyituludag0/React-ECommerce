import React, { useState, useEffect } from "react";
import "./sock.css";
import SockService from "../../services/SockService";
import search from "../sock/img/icon/search.png";
import heart from "../sock/img/icon/heart.png";
import compare from "../sock/img/icon/compare.png";

export default function Sock() {
  const [socks, setSocks] = useState([]);

  useEffect(() => {
    let sockService = new SockService();
    sockService.getAllSock().then((result) => setSocks(result.data.data));
  }, []);
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <li className="active">Erkek</li>
                <li>Bayan</li>
                <li>Çocuk</li>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
              {socks.map((sock) => (
                <div className="product__item" key={sock.id}>
                  <div className="product__item__pic set-bg">
                    <img
                      className="card-img-top"
                      src={sock.image}
                      alt="item.png"
                    />
                    <ul className="product__hover">
                      <li>
                        <a href="/">
                          <img src={heart} alt="heart-icon" />
                          <span style={{left:"-8rem"}}>Favorilerime Ekle</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src={compare} alt="compare-icon" />
                          <span>Karşılaştır</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src={search} alt="search-icon" />
                          <span style={{left:"-7rem"}}>Detayları Gör</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6> {sock.name} </h6>
                    <a href="/" className="add-cart">
                      + Sepete Ekle
                    </a>
                    <div className="rating">
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <h5> {sock.price}₺</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
