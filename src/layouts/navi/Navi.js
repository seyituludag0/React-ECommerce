import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import RegisterLoginLayout from "../registerLoginLayout/RegisterLoginLayout";
import UserProfileMenuExample from "./UserProfileMenuExample";
import { useUserContext } from "../../contexts/UserContext";
import { CartContextValue } from "../../contexts/ContextProvider";
import * as authActionType from "../../store/actions/authAction";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import CartService from "../../services/CartService";
import logo from "../../assets/logo.jpg"
import search from "../../assets/search.png"
import heart from "../../assets/heart.png"
import cart from "../../assets/cart.png"
import SearchBar from "../searchBar/SearchBar";
import MyFavorite from "../favorite/MyFavorite";
import CartPreview from "../cart/CartPreview";


export default function Navi() {
  const [cartData, dispatch] = CartContextValue();
  const [state] = useUserContext();
  const history = useHistory();
  const userId = localStorage.getItem("userId");
 
  // ----------------------------------------------------------------------------------------------------
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
        <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/"><img src={logo} /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active"><Link to="/">Ana Sayfa</Link></li>
                  <li><Link to="/products">Ürünler</Link></li>
                  <li><a style={{cursor:"pointer"}}>Diğer Sayfalar</a>
                    <ul className="dropdown">
                      <li>
                        <Menu.Item>
                          <Link to="/categories">Kategoriler</Link>
                         </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/brands">Markalar</Link>
                         </Menu.Item>
                      </li>
                      <li>
                      <li>
                        <Menu.Item>
                          <Link to="/about">Hakkımızda</Link>
                         </Menu.Item>
                      </li>
                      </li>
                      <li>
                        <Menu.Item>
                          <Link to="/contact">İletişim</Link>
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
          <div className="canvas__open"><Icon name="bars" /></div>
        </div>
      </header>
    </div>
  );
}
