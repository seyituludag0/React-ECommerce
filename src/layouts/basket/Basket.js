import React, { useState } from "react";
import { Button, Drawer } from "@material-ui/core";
import cart from "../../layouts/navi/img/icon/cart.png";
import BasketDetail from "./BasketDetail";
import { useSelector } from "react-redux";

export default function Basket() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img style={{ cursor: "pointer" }}
            src={cart}
            alt="cart-icon"
            onClick={toggleDrawer(anchor, true)}
          />
          {/* <span>{cartItems.length}</span> */}
          <div className="price" style={{marginLeft:"5px"}}>0.00₺</div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <BasketDetail />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
