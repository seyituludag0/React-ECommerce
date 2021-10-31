import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../navi/navi.css";
import logo from "../navi/img/logo.jpg";
import RegisterLoginLayout from "../RegisterLoginLayout/RegisterLoginLayout";
import UserProfileMenuExample from "./UserProfileMenuExample";
import { useUserContext } from "../../contexts/UserContext";
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import UserProfileSetting from "../UserProfileSetting/UserProfileSetting";
import AdminNavi from "../admin/AdminNavi";
import { CartContextValue } from "../../contexts/ContextProvider";


export default function Navi() {
  const [cartData, dispatch] = CartContextValue();
  const [state] = useUserContext();

 


  const getTotalAmount=()=>{
		return cartData.cartItems.reduce((prevValue,currentValue)=>prevValue+currentValue.price,0);
	}

  return (
    <div>
      {/* Navbar */}
      {!state.isAdmin ? (
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
                      <Link to="/">ANA SAYFA</Link>
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
                      <li>
                        <Menu.Item>
                          <Link to="/admin">ADMIN</Link>
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
      ) : (
        <>
          <AdminNavi />
        </>
      )}
      {/* Navbar */}



      {/* <Link to={"/checkoutcart/"}>Checkout Cart</Link>
      <div style={{ float: "right", cursor: "pointer" }}>X</div>
      <ul>
        {cartData.cartItems.map((cartObj) => (
          <li
            key={cartObj.id}
            className="sbmincart-item sbmincart-item-changed"
          >
            <div className="sbmincart-details-name">
              <a className="sbmincart-name">Name: {cartObj.name}</a>
              <ul className="sbmincart-attributes"></ul>
            </div>
            <div className="sbmincart-details-quantity">
              <span className="sbmincart-quantity">
                Quantity: {cartObj.quantity}
              </span>
            </div>
            <div className="sbmincart-details-remove">
              <button
                type="button"
                className="sbmincart-remove"
                data-sbmincart-idx="0"
              >
                ×
              </button>
            </div>
            <div className="sbmincart-details-price">
              <span className="sbmincart-price">Price: {cartObj.price}₺</span>
              <hr />
            </div>
          </li>
        ))}
      </ul>

      <ul>
      <div>
			   <span>Total: </span>
			   
					<span>{	getTotalAmount()}₺</span>
		   </div>
      </ul> */}
    </div>
  );
}
