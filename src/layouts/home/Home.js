import React, { useEffect } from "react";
import "./home.css";
import "./bootstrap.css";
import "./owl.carousel.min.css";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeSocks from "./HomeSocks";
import InstagramPosts from "./InstagramPosts";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { useUserContext } from "../../contexts/UserContext";
import { CartContextValue } from "../../contexts/ContextProvider";


export default function Home() {
  const [state] = useUserContext();
  const userId = state?.authenticatedUser?.id;
  const [cartData, dispatch] = CartContextValue();

  const getCartApi = () => {
    HttpPostwithToken("addToCart/getCartsByUserId", {}).then(
      (res) => {
        res.json().then((data) => {
          if (res.ok) {
            dispatch({
              type: "add_cart",
              data: data,
            });
            //alert("Successfully added..")
          } else {
            alert(data.message);
          }
        });
      }
      // error=>{
      // 	alert(error.message);
      // }
    );
  };

  useEffect(() => {
    localStorage.setItem("userId", userId);
    getCartApi();
  });

  return (
    <div>
      <HomeSlider />
      <HomeCategories />
      <HomeSocks />
      <InstagramPosts />
    </div>
  );
}
