import React, { useState, useEffect } from "react";
import { Menu, Button, Badge, IconButton, Divider, Alert } from "@mui/material";
import { Close, ShoppingCart } from "@material-ui/icons";
import { styled } from "@material-ui/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import CartService from "../../services/CartService";
import { toast } from "react-toastify";

export default function CartPreview() {
  const [anchorEl, setAnchorEl] = useState(null);
  const userId = localStorage.getItem("userId");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [cartData, dispatch] = CartContextValue();

  const [cartData, setCartData] = useState([]);
  let cartService = new CartService();
  useEffect(() => {
    cartService
      .getCartsByUserId(userId)
      .then((result) => setCartData(result.data));
  }, []);

  // ------------------------------------------------------------------------------------------

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000",
      color: "#fff",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const getTotalAmount = () => {
    return cartData.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      left: 5,
      top: 13,
      border: `2px solid purple`,
      color: "#fff",
      width: "1px",
    },
  }));

  const MyDivider = styled("div")(() => ({
    width: "265%",
  }));

  const removeItem = (cartObj, e) => {
    let obj = { cartId: cartObj.productId, userId: 1 };
    cartService
      .removeProductFromCart(obj.cartId, obj.userId)
      .then((result) => toast.success(result.message))
      .catch(function (res) {
        console.log("Error ", res);
        //alert(error.message);
      });
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconButton aria-label="cart">
          <StyledBadge
            badgeContent={cartData.length}
            color="secondary"
          >
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
      </Button>

      <Menu
        style={{ marginRight: "-11rem", marginTop: "3rem" }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {cartData.length != 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ürün Resmi</StyledTableCell>
                  <StyledTableCell>Ürün Adı</StyledTableCell>
                  <StyledTableCell align="right">Beden</StyledTableCell>
                  <StyledTableCell align="right">Renk</StyledTableCell>
                  <StyledTableCell align="right">Ürün Adedi</StyledTableCell>
                  <StyledTableCell align="right">Fiyat</StyledTableCell>
                  <StyledTableCell align="right">X</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartData.map((cartObj) => (
                  <StyledTableRow key={cartObj.id}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        src={cartObj.productImage}
                        style={{ width: "100px" }}
                      />
                      {/* <img src="https://res.cloudinary.com/uludag-sock/image/upload/v1634503267/cart-1_xp67iz.jpg"/> */}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {cartObj.productName}
                    </StyledTableCell>
                    <StyledTableCell scope="row">
                      {cartObj.productSize.size}
                    </StyledTableCell>
                    <StyledTableCell scope="row">
                    {cartObj.productColor.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartObj.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartObj.price}₺
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Close
                        style={{ cursor: "pointer" }}
                        onClick={() => removeItem(cartObj)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                <Link to="/cartdetail">
                  <Button color="secondary">Sepet Detayına Git</Button>
                </Link>

                <MyDivider>
                  <Divider>Toplam Tutar: {getTotalAmount()}₺</Divider>
                </MyDivider>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Alert severity="info">
            Sepetinizde henüz ürün yok! Hemen ürün eklemek için ürünlere {" "}
            <Link to="/products">göz atın</Link>
          </Alert>
        )}
      </Menu>
    </div>
  );
}
