import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {
  UncontrolledCollapse,
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
import "./style.css";
import logo from "../../layouts/navi/img/logo.jpg";
import { Menu } from "semantic-ui-react";

export default function AdminNavi() {
  const [userView, setUserView] = useState(false);
  const [adminView, setAdminView] = useState(true);
  let history = useHistory();

  function switchToUserView() {
    setUserView(true);
    localStorage.setItem("userView", userView);
    history.push("/");
    let userDOM = document.querySelector("#switchToUserButton");
    userDOM.addEventListener("click", changeStyleUserButton());
  }

  function switchToAdminView() {
    setAdminView(true);
    localStorage.setItem("adminView", adminView);
    history.push("/admin");
    let userDOM = document.querySelector("#switchToAdminButton");
    userDOM.addEventListener("click", changeStyleAdminButton());
  }

  function changeStyleAdminButton() {
    let userDOM = document.querySelector("#switchToUserButton");
    userDOM.classList.add("userButtonVisible");
    let adminDOM = document.querySelector("#switchToAdminButton");
    adminDOM.classList.add("adminButtonHidden"); // burası okeyto
    userDOM.classList.remove("userButtonHidden");
  }

  function changeStyleUserButton() {
    let adminDOM = document.querySelector("#switchToAdminButton");
    adminDOM.classList.add("adminButtonHidden");
    let userDOM = document.querySelector("#switchToUserButton");
    userDOM.classList.add("userButtonHidden");
    adminDOM.classList.remove("adminButtonHidden");
  }

  let userName = localStorage.getItem("userName");

  return (
    <div>
      <Row className="justify-content-center mt-md">
        <Col lg="12">
          <Row style={{ width: "252rem" }}>
            <Col lg="6">
              <Navbar className="navbar-dark bg-primary rounded" expand="lg">
                <Container>
                  <div className="header__logo">
                    <a href="/">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                  <nav className="header__menu mobile-menu" style={{marginLeft:"13rem"}}>
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
                  {/* <NavbarBrand
                    style={{ marginLeft: "30rem" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Button
                      id="switchToUserButton"
                      onClick={() => switchToUserView()}
                    >
                      Kullanıcı Görünümüne Geç
                    </Button>

                    <Button
                      id="switchToAdminButton"
                      onClick={() => switchToAdminView()}
                    >
                      Admin Görünümüne Geç
                    </Button>
                  </NavbarBrand> */}
                  <button className="navbar-toggler" id="nav-inner-primary">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <UncontrolledCollapse navbar toggler="#nav-inner-primary">
                    <Nav className="ml-lg-auto nav" navbar>
                      <NavItem>
                        <NavLink onClick={(e) => e.preventDefault()}>
                          {userName ? (
                            <>{userName.toLocaleUpperCase()}</>
                          ) : null}
                        </NavLink>
                      </NavItem>
                      <NavItem style={{ marginTop: "1.8rem" }}>
                        <UserProfileSetting />
                      </NavItem>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
