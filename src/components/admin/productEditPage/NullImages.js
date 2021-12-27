import React, { useState, useEffect } from "react";
import ProductImageService from "../../../services/ProductImageService";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from "@material-ui/core";
import ProductImageUpload from "../../ProductImageUpload"


export default function NullImages() {
  const [nullImages, setNullImages] = useState([]);

  useEffect(() => {
    let productImageService = new ProductImageService();
    productImageService
      .getAllProductImageNull()
      .then((result) => setNullImages(result.data.data));
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Ürün Id</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <React.Fragment>
        {nullImages.map((image, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell component="th" scope="row">
              {image.productId}
            </TableCell>
            <TableCell align="right"> 
            <ProductImageUpload id={image.id} />
            </TableCell>
            
            
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}
// 