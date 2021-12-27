import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import CartService from "../../services/CartService";
import { Alert } from "@mui/material";
import DeliveryInformation from "../deliveryInformation/DeliveryInformation";
import { CartContextValue } from "../../contexts/ContextProvider";

export default function CartSummary() {
  const [cartData, dispatch] = CartContextValue();

  useEffect(() => {
    let cartService = new CartService();
    cartService
      .getCartsByUserId(121)
      .then((result) => dispatch({ type: "add_cart", data: result.data }));
  }, []);

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

  const MyDivider = styled("div")(() => ({
    width: "400%",
  }));

  const getTotalAmount = () => {
    return cartData.cartItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Alert variant="outlined" severity="info">
              Sipariş özetiniz aşağıda gösterilmektedir
            </Alert>
            <br />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Ürün Resmi</StyledTableCell>
                    <StyledTableCell>Ürün Adı</StyledTableCell>
                    <StyledTableCell>Marka Adı</StyledTableCell>
                    <StyledTableCell align="right">Ürün Adedi</StyledTableCell>
                    <StyledTableCell align="right">Fiyat</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    cartData.cartItems.map((cartItem, key)=>(
                      <StyledTableRow key={cartItem.id}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        src={cartItem.productImage}
                        style={{ width: "100px" }}
                      />
                      {/* <img src="https://res.cloudinary.com/uludag-sock/image/upload/v1634503267/cart-1_xp67iz.jpg"/> */}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                    {cartItem.productName}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                    {cartItem.brandName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartItem.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {cartItem.price}₺
                    </StyledTableCell>
                  </StyledTableRow>
                    ))
                  }

                  <MyDivider>
                    <Divider>Toplam Tutar: {getTotalAmount()}₺</Divider>
                  </MyDivider>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <DeliveryInformation />
        </div>
      </div>
      {/*  */}
    </>
  );
}
