import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../navi/navi.css";
import logo from "../navi/img/logo.jpg"
import search from "../navi/img/icon/search.png"
import heart from "../navi/img/icon/heart.png"
import cart from "../navi/img/icon/cart.png"

export default function Navi() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <nav className="header__menu mobile-menu">
            <ul>
              <li className="active">
                <Menu.Item>
                  <Link to="/asd">ANA SAYFA</Link>
                </Menu.Item>
              </li>

              <li>
                <a href="/">SAYFALAR</a>
                <ul className="dropdown">
                <li>
                    <Menu.Item>
                      <Link to="/socks">ÜRÜNLER</Link>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item>
                      <Link to="/categories">KATEGORİLER</Link>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item>
                      <Link to="/">HAKKIMIZDA</Link>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item>
                      <Link to="/">İLETİŞİM</Link>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item>
                      <Link to="/">ADMIN</Link>
                    </Menu.Item>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="header__nav__option">
            <a href="/" className="search-switch">
              <img src={search} alt="search-icon" />
            </a>
            <a href="/">
              <img src={heart} alt="heart-icon" />
            </a>
            <a href="/">
              <img src={cart} alt="cart-icon" /> <span>0</span>
            </a>
            <div className="price">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
