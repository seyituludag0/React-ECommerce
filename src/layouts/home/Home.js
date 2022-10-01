import React, {useState} from "react";
import HomeSlider from "./HomeSlider";
import HomeCategories from "./HomeCategories";
import HomeProducts from "./HomeProducts";
import InstagramPosts from "./InstagramPosts";
import { useUserContext } from "../../contexts/UserContext";

export default function Home() {
  const [state] = useUserContext();


    localStorage.setItem("userId", state?.authenticatedUser?.id)

  return (
    <div>
      
    </div>
  );
}
