import React, { useEffect } from "react";
import "./home.css";
import "./bootstrap.css";
import "./owl.carousel.min.css";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeSocks from "./HomeSocks";
import InstagramPosts from "./InstagramPosts";
import { useUserContext } from "../../contexts/UserContext";



export default function Home() {
  const [state] = useUserContext();
  const userId = state?.authenticatedUser?.id;


  useEffect(() => {
    localStorage.setItem("userId", 115);
  }, []);

  return (
    <div>
      {/* <TokenExpiredAlert /> */}
      <HomeSlider />
      <HomeCategories />
      <HomeSocks />
      <InstagramPosts />
      
    </div>
  );
}
