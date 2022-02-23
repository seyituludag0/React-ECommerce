import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Box,
  Button,
  Paper,
  TableBody,
} from "@material-ui/core";
import ProductService from "../../../services/ProductService";
import ProductAdd from "./ProductAdd";
import ProductUpdate from "./ProductUpdate";
import ProductDelete from "./ProductDelete";
import NullImages from "./NullImages";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65rem",
  height: "45rem",
  boxShadow: 24,
  p: 4,
};
function Row() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productService = new ProductService();
    productService.getAllProduct().then((result) => setProducts(result.data.data));
  }, [products]);

  return (
    <>
      <React.Fragment>
        {products.map((product, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>{product.id}</TableCell>
            <TableCell component="th" scope="row">
              {product.name}
            </TableCell>
            <TableCell align="right">{product.category.name}</TableCell>
            <TableCell align="right">{product.brand.name}</TableCell>
            <TableCell align="right">{product.color.name}</TableCell>
            <TableCell align="right">{product.bodySize}</TableCell>
            <TableCell align="right">{product.unitsInStocks}</TableCell>
            <TableCell align="right">{product.price}₺</TableCell>
            <TableCell align="right">
            <ProductUpdate product={product} />
            </TableCell>
            <TableCell align="right">
              <ProductDelete id={product.id}/>
            </TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}

export default function ProductEditPage() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openImage, setOpenImage] = useState(false);

  const handleOpenProduct = () => setOpenProduct(true);
  const handleCloseProduct = () => setOpenProduct(false);

  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);


  return (
    <div className="my-component" style={{ marginTop: "4rem" }}>
      <Button style={{float:"right"}} onClick={handleOpenProduct}>EKLE</Button>
      <Modal
        open={openProduct}
        onClose={handleCloseProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductAdd />
        </Box>
      </Modal>
      
      {/* ------------------------------------------------------------------ */}

      <Button style={{float:"right"}} onClick={handleOpenImage}>RESMİ OLMAYAN ÜRÜNLER</Button>
      <Modal
        open={openImage}
        onClose={handleCloseImage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NullImages />
        </Box>
      </Modal>
     
      
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Ürün Id</TableCell>
              <TableCell>Ürün Adı</TableCell>
              <TableCell align="right">Kategori</TableCell>
              <TableCell align="right">Marka</TableCell>
              <TableCell align="right">Renk</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Stok Adedi</TableCell>
              <TableCell align="right">Fiyat</TableCell>
              <TableCell align="right">Güncelle</TableCell>
              <TableCell align="right">Sil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
