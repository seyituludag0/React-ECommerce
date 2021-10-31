import React, { useState } from 'react'
import { Menu, Button } from "@mui/material"
import { ShoppingCart } from "@material-ui/icons"
import { styled } from '@material-ui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContextValue } from '../../contexts/ContextProvider';


export default function CartPreview() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cartData, dispatch] = CartContextValue();
  
// ------------------------------------------------------------------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const getTotalAmount=()=>{
  return cartData.cartItems.reduce((prevValue,currentValue)=>prevValue+currentValue.price,0);
}


  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ShoppingCart />
      </Button>
      <Menu style={{ marginRight: "-11rem", marginTop: "3rem" }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ürün Resmi</StyledTableCell>
            <StyledTableCell>Ürün Adı</StyledTableCell>
            <StyledTableCell align="right">Ürün Adedi</StyledTableCell>
            <StyledTableCell align="right">Fiyat</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cartData.cartItems.map((cartObj) => (
          <StyledTableRow 
          key={cartObj.id}
          >
              <StyledTableCell component="th" scope="row">
                <img src="https://res.cloudinary.com/uludag-sock/image/upload/v1634503267/cart-1_xp67iz.jpg"/>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
              {cartObj.name}
              </StyledTableCell>
              <StyledTableCell align="right">{cartObj.quantity}</StyledTableCell>
              <StyledTableCell align="right">{cartObj.price}₺</StyledTableCell>
            </StyledTableRow>
          ))}
         <hr />
         
         <StyledTableRow>{getTotalAmount()}₺</StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Menu>
    </div>
  );
}
