import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../navi/navi.css";
import logo from "../navi/img/logo.jpg";
import RegisterLoginLayout from "../RegisterLoginLayout/RegisterLoginLayout"
import UserProfileMenuExample from "./UserProfileMenuExample"
import { useUserContext } from "../../contexts/UserContext"
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
  Col
} from "reactstrap";
import UserProfileSetting from "../UserProfileSetting/UserProfileSetting";

export default function Navi() {

  const [state] = useUserContext();

  return (
    <div>
    {!state.isAdmin?(
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
                      <Link to="/admin">ADMIN</Link>
                    </Menu.Item>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-lg-3 col-md-3">
          <div className="header__nav__option" style={{ marginLeft: "-15px" }}>
            {localStorage.getItem("token") ? <UserProfileMenuExample /> : <RegisterLoginLayout />}
          </div>
        </div>
      </div>
    </div>
    ):(
      <Row className="justify-content-center mt-md">
          <Col lg="12">
           
            <Row style={{width:"252rem"}}>
              <Col lg="6">
                <Navbar className="navbar-dark bg-primary rounded" expand="lg">
                  <Container>
                    <NavbarBrand style={{marginLeft:"57rem"}}
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <Link to="/admin" style={{ color:"#fff"}}>Menu</Link>
                    </NavbarBrand>
                    <button className="navbar-toggler" id="nav-inner-primary">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#nav-inner-primary">
                      <div className="navbar-collapse-header">
                        <Row>
                          <Col className="collapse-brand" xs="6">
                            <Link to="/">
                             
                            </Link>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button
                              className="navbar-toggler"
                              id="nav-inner-primary"
                              type="button"
                            >
                              <span />
                              <span />
                            </button>
                          </Col>
                        </Row>
                      </div>
                      <Nav className="ml-lg-auto navvvvvvvvvvv" navbar>
                        <NavItem>
                          <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Profil
                          </NavLink>
                        </NavItem>
                        <NavItem style={{marginTop:"1.8rem"}}>
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
    )}
    </div>
  );
}
