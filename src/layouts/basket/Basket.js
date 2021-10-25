import React, { useEffect, useState } from "react";
import cart from "../../layouts/navi/img/icon/cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketService from "../../services/BasketService";

export default function Basket() {
  // const { cartItems } = useSelector((state) => state.cart);
  const [socks, setSocks] = useState([])
  useEffect(()=>{
    let basketService = new BasketService();
    basketService.getByUserId(106).then((result)=>setSocks(result.data.data))
  }, [])
  return (
    <div>
      <React.Fragment>
          <img src={cart} className="cart-icon" alt="cart-icon" />
        <Link to="/basketdetail">
          <span>{socks.length==0 ? <h3>0</h3>:<h3>{socks.length}</h3>}</span>
        </Link>
        <div className="price" style={{ marginLeft: "5px" }}>
          0.00₺
        </div>
      </React.Fragment>
    </div>
  );
}
