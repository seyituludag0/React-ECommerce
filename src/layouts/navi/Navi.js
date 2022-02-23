import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../navi/navi.css";
import logo from "../navi/img/logo.jpg";
import RegisterLoginLayout from "../registerLoginLayout/RegisterLoginLayout";
import UserProfileMenuExample from "./UserProfileMenuExample";
import { useUserContext } from "../../contexts/UserContext";
import { CartContextValue } from "../../contexts/ContextProvider";
import * as authActionType from "../../store/actions/authAction";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import CartService from "../../services/CartService";


export default function Navi() {
  const [cartData, dispatch] = CartContextValue();
  const [state] = useUserContext();
  const history = useHistory();
  const userId = localStorage.getItem("userId");
 
  //----------------------------------------------------------------------------------------------------
  useEffect(() => {
    getCartApi();
    var token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, []);

  const logout = () => {
    dispatch({ type: authActionType.LOGOUT });
    localStorage.clear()
    history.push("/login");
    
  };


  const getCartApi = () => {
    let cartService = new CartService();
    cartService.getCartsByUserId(userId).then((result)=>dispatch({type:"add_cart", data:result.data}))
  }

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Menu.Item>
                      <Link to="/">ANA SAYFA</Link>
                    </Menu.Item>
                  </li>
                  <li>
                  <Link to="/">SAYFALAR</Link>
                    <ul className="dropdown">
                      <li>
                        <Menu.Item>
                          <Link to="/products">ÜRÜNLER</Link>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/categories">KATEGORİLER</Link>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/brands">MARKALAR</Link>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/about">HAKKIMIZDA</Link>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/contact">İLETİŞİM</Link>
                        </Menu.Item>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-3">
              <div
                className="header__nav__option"
                style={{ marginLeft: "-15px" }}
              >
                {localStorage.getItem("token") ? (
                  <UserProfileMenuExample />
                ) : (
                  <RegisterLoginLayout />
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
