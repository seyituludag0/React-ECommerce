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
import BrandService from "../../../services/BrandService";
import BrandAdd from "./BrandAdd"
import BrandUpdate from "./BrandUpdate"
import BrandDelete from "./BrandDelete"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65rem",
  height: "45rem",
  // bgcolor: "gray",
  boxShadow: 24,
  p: 4,
};
function Row() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
    let brandService = new BrandService();
    brandService.getAllBrands()
      .then((result) => setBrands(result.data.data));
  }, [brands]);

  return (
    <>
      <React.Fragment>
        {brands.map((brand, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell component="th" scope="row">
              {brand.name}
            </TableCell>
            <TableCell align="right">
              <BrandUpdate brand={brand} />
            </TableCell>
            <TableCell align="right">
            <BrandDelete id={brand.id} />
            </TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}

export default function BrandEditPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="my-component" style={{ marginTop: "4rem" }}>
       <Button style={{float:"right"}} onClick={handleOpen}>EKLE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BrandAdd />
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Marka</TableCell>
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
