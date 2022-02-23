import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllCategories from "../../components/categories/AllCategories";
import AllBrands from "../../components/brands/AllBrands";
import AllProduct from "../../components/product/AllProduct";
import Home from "../home/Home";
import Login from "../login/Login"
import NotFound from "../404page/NotFound";
import EmailVerificationTemplate from "../../components/emailVerificationTemplate/EmailVerificationTemplate";
import Admin from "../../components/admin/Admin";
import ProductCard from "../../components/admin/cards/ProductCard";
import CategoryEditPage from "../../components/admin/categoryEditPage/CategoryEditPage";
import BrandEditPage from "../../components/admin/brandEditPage/BrandEditPage";
import ForgotPassword from "../../layouts/forgotPassword/ForgotPassword"
import Contact from "../contact/Contact";
import About from "../about/About";
import CartDetail from "../cart/CartDetail";
import RegisterLayout from "../registerLoginLayout/RegisterLayout";
import UserInfos from "../userInfos/UserInfos";
import TokenExpiredAlert from "../tokenExpiredAlert/TokenExpiredAlert";
import CampaignManagementEditPage from "../../components/admin/campaignManagementEditPage/CampaignManagementEditPage";
import CampaignDetails from "../campaigns/campaignDetails/CampaignDetails";
import ProductEditPage from "../../components/admin/productEditPage/ProductEditPage";
import ProductDetail from "../../components/product/product-detail/ProductDetail"
import ProductByCategory from "../../components/product/ProductByCategory"
import SearchFound from "../searchBar/SearchFound";
import ProductOrderInfo from "../productOrderInfo/ProductOrderInfo";
import CartSummary from "../cart/CartSummary";
import Payment from "../payment/Payment";
import SavedCardsToPay from "../payment/SavedCardsToPay"
import MyRegisteredCards from "../payment/mySavedCards/MyRegisteredCards";
import Unauthorized from "../unauthorized/Unauthorized";
import ResetPasswordForm from "../resetPasswordForm/ResetPasswordForm";
import OrderManagementPanel from "../../components/seller/OrderManagementPanel";


export default function Dashboard() {
  const auth = localStorage.getItem("isAdmin");
  return (
    <div>
      <ToastContainer position="top-left" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={AllProduct} />
        <Route exact path="/categories" component={AllCategories} />
        <Route exact path="/brands" component={AllBrands} />
        <Route exact path="/category/:categoryId" component={ProductByCategory} />
        <Route exact path="/product-detail/:productId" component={ProductDetail} />
        <Route path="/register" component={RegisterLayout} />
        <Route path="/login" component={Login} />
        <Route path="/emailVerification" component={EmailVerificationTemplate} />
        <Route path="/productcard" component={ProductCard} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/cartdetail" component={CartDetail}/>
        <Route exact path="/userprofile/:userId" component={UserInfos} />
        <Route path="/campaigndetails/:campaignId" component={CampaignDetails} />
        <Route path="/search" component={SearchFound} />
        <Route path="/orderinformation" component={ProductOrderInfo}/>
        <Route path="/cartsummary" component={CartSummary}/>
        <Route path="/payment" component={Payment} />
        <Route path="/savedCardsToPay" component={SavedCardsToPay} />
        <Route path="/myRegisteredCards" component={MyRegisteredCards} />
        <Route path="/producteditpage" component={ProductEditPage} />
        <Route exact path="/admin">{ auth !== null && auth.includes("true") ? <Admin /> : <Unauthorized /> }</Route>
        {/* <Route exact path="/producteditpage">{ auth !== null && auth.includes("true") ? <ProductEditPage /> : <Unauthorized /> }</Route> */}
        <Route exact path="/categoryeditpage">{ auth !== null && auth.includes("true") ? <CategoryEditPage /> : <Unauthorized /> }</Route>
        <Route exact path="/brandeditpage">{ auth !== null && auth.includes("true") ? <BrandEditPage /> : <Unauthorized /> }</Route>
        <Route exact path="/campaignmanagementeditpage">{ auth !== null && auth.includes("true") ? <CampaignManagementEditPage /> : <Unauthorized /> }</Route>
        <Route exact path="/ordermanagementpanel">{ auth !== null && auth.includes("true") ? <OrderManagementPanel /> : <Unauthorized /> }</Route>
        <Route exact path="/resetPassword" component={ResetPasswordForm} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}