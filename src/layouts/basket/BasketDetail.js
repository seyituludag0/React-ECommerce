import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketService from "../../services/BasketService";
import { Button } from "@material-ui/core"

export default function BasketDetail() {
  const { cartItems } = useSelector((state) => state.cart);

  const [amount, setAmount] = useState(1)

  const addFromToBasket = () =>{
    setAmount(amount + 1)
  }

  const removeFromToBasket = () =>{
    setAmount(amount - 1)
  }

  // const [cartItems, setCartItems] = useState([])

  // useEffect(()=>{
  //   let basketService = new BasketService();
  //   basketService.getByUserId(60).then((result)=>setCartItems(result.data.data.data))
  // },[])

  console.log("cartItems total: ", cartItems.sock);

  

  return (
    <Card
      style={{ width: "25rem", overflow: "scroll" }}
    >
      {cartItems.length == 0 ? (
        <span>
          Henüz sepetinizde ürününüz yok! Hemen sepetinize ürün eklemek için
          ürünler sayfasına <Link to="/socks">göz atın</Link>
        </span>
      ) : (
        <span>Sepetinizde {cartItems.length} adet ürün var</span>
      )}

      {cartItems.map((cartItem, key) => (
        <CardActionArea
          key={key}
          className="my-card"
          style={{ marginTop: "75px" }}
        >
          <CardMedia
            component="img"
            height="140"
            image={cartItem.sock.sockImage.image1}
            alt={cartItem.sock.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cartItem.sock.name}
            </Typography>
            <Typography variant="body2">{cartItem.sock.description}</Typography>
            <Typography style={{ textAlign: "right" }}>
              {cartItem.sock.price}₺
            </Typography>
          </CardContent>

          <CardContent>
            <Button variant="outlined" onClick={()=>addFromToBasket()}>+</Button>
            {amount}
            {amount==2 ? <Button variant="outlined" onClick={()=>removeFromToBasket()}>-</Button>
            :<Button variant="contained" disabled>-</Button>}
          </CardContent>
        <hr />
        </CardActionArea>
      ))}
      <h2>Total: cartItems?.socks?.price₺</h2>
    </Card>
  );
}
