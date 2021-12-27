import React, { useEffect } from "react";
import "./home.css";
import "./bootstrap.css";
import "./owl.carousel.min.css";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeProducts from "./HomeProducts";
import InstagramPosts from "./InstagramPosts";
import { useUserContext } from "../../contexts/UserContext";
import ButtonExample from "../ButtonExample"

export default function Home() {
  const [state] = useUserContext();
  const userId = state?.authenticatedUser?.id;


  useEffect(() => {
    localStorage.setItem("userId", 121);
  }, []);

  return (
    <div>
      <HomeSlider />
      <HomeCategories />
      <HomeProducts />
      <InstagramPosts />
      {/* <ButtonExample /> */}
    </div>
  );
}
