import React from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import AllCategories from "../../components/categories/AllCategories";
import AllBrands from "../../components/brands/AllBrands";
import Sock from "../../components/sock/AllSock";
import SockDetail from "../../components/sock/sock-detail/SockDetail";
import SockByCategory from "../../components/sock/SockByCategory";
import Home from "../home/Home";
import Register from "../register/Register"
import Login from "../login/Login"
import NotFound from "../404page/NotFound";
import ActivationCodeVerification from "../../components/activationCodeVerification/ActivationCodeVerification";
import Admin from "../../components/admin/Admin";
import SockCard from "../../components/admin/cards/SockCard";
import SockEditPage from "../../components/admin/sockEditPage/SockEditPage";
import CategoryEditPage from "../../components/admin/categoryEditPage/CategoryEditPage";
import BrandEditPage from "../../components/admin/brandEditPage/BrandEditPage";
import ForgotPassword from "../../layouts/forgotPassword/ForgotPassword"

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/socks" component={Sock} />
        <Route exact path="/categories" component={AllCategories} />
        <Route exact path="/brands" component={AllBrands} />
        <Route exact path="/category/:categoryId" component={SockByCategory} />
        <Route exact path="/sock-detail/:sockId" component={SockDetail} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/activationcodeverification" component={ActivationCodeVerification} />
        <Route path="/admin" component={Admin} />
        <Route path="/sockcard" component={SockCard} />
        <Route path="/sockeditpage" component={SockEditPage} />
        <Route path="/categoryeditpage" component={CategoryEditPage} />
        <Route path="/brandeditpage" component={BrandEditPage} />
        <Route path="/forgotpassword" component={ForgotPassword} />











        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}