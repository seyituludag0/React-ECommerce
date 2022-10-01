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
import { useSelector } from "react-redux";

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

  // const { cartItems } = useSelector((state) => state.cart);

  const [cartItems, setCartItems] = useState([]);
  let cartService = new CartService();
  useEffect(() => {
    cartService
      .getCartsByUserId(userId)
      .then((result) => setCartItems(result.data));
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
    width: "400%",
  }));

  const getTotalAmount = () => {
    return cartItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };
  

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
          <StyledBadge badgeContent={cartItems.length} color="secondary">
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
        {cartItems.length != 0 ? (
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
                {cartItems.map((cartObj, key) => (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        // src={cartObj.product.productImage.image1}
                        style={{ width: "100px" }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {cartObj.product.name}
                    </StyledTableCell>
                    <StyledTableCell scope="row">
                      {cartObj.productVariant.productSize.size}
                    </StyledTableCell>
                     <StyledTableCell scope="row">
                      <div className="product__details__option__color">
                        <label
                          style={{
                            backgroundColor: `${cartObj.productVariant.color.colorCode}`,
                            cursor: "default",
                          }}
                          title={`${cartObj.productVariant.color.name}`}
                        />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartObj.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartObj.product.price}₺
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
            Sepetinizde henüz ürün yok! Hemen ürün eklemek için ürünlere{" "}
            <Link to="/products">göz atın</Link>
          </Alert>
        )}
      </Menu>
    </div>
  );
}
