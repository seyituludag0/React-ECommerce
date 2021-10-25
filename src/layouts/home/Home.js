import React from "react";
import "./home.css";
import "./bootstrap.css";
import "./owl.carousel.min.css";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeSocks from "./HomeSocks";
import InstagramPosts from "./InstagramPosts";
import WidgetWhatsApp from "../wp/WidgetWhatsApp"
import Comment from "../comments/Comment";
import UserInfos from "../userInfos/UserInfos";
import MyPage from "../userInfos/MyPage";

export default function Home() {
  return (
    <div>
         {/* <HomeSlider />
        <HomeCategories /> 
        <HomeSocks />
        <InstagramPosts /> */}
        {/* <UserInfos /> */}
        <MyPage />
    </div>
  );
}
