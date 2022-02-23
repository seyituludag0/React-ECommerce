import React, { useEffect } from "react";
import "./home.css";
import "./bootstrap.css";
import "./owl.carousel.min.css";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeProducts from "./HomeProducts";
import InstagramPosts from "./InstagramPosts";
import ChangePassword from "../userInfos/ChangePassword"
export default function Home() {
  // const [state] = useUserContext();
  // const userId = state?.authenticatedUser?.id;
  // console.log("state?.authenticatedUser?.id: ", userId)

  // useEffect(() => {
  //   localStorage.setItem("userId", 122);
  // }, []);

  return (
    <div>
      <HomeSlider />
      <HomeCategories />
      <HomeProducts />
      <InstagramPosts />
    </div>
  );
}
