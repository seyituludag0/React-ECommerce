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
import SockService from "../../../services/SockService";
import SockAdd from "./SockAdd";
import SockUpdate from "./SockUpdate";
import SockDelete from "./SockDelete";
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
  const [socks, setSocks] = useState([]);
  useEffect(() => {
    let sockService = new SockService();
    sockService.getAllSock().then((result) => setSocks(result.data.data));
  }, [socks]);


  return (
    <>
      <React.Fragment>
        {socks.map((sock, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell component="th" scope="row">
              {sock.name}
            </TableCell>
            <TableCell align="right">{sock.category.name}</TableCell>
            <TableCell align="right">{sock.brand.name}</TableCell>
            <TableCell align="right">{sock.color.name}</TableCell>
            <TableCell align="right">{sock.bodySize}</TableCell>
            <TableCell align="right">{sock.unitsInStocks}</TableCell>
            <TableCell align="right">{sock.price}₺</TableCell>
            <TableCell align="right">
            <SockUpdate sock={sock} />
            </TableCell>
            <TableCell align="right">
              <SockDelete id={sock.id}/>
            </TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}

export default function SockEditPage() {
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
          <SockAdd />
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
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
