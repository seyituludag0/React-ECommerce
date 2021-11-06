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
import SockImageService from "../../../services/SockImageService";
import SockAdd from "./SockAdd";
import SockUpdate from "./SockUpdate";
import SockImageUpload from "../../../components/SockImageUpload"
import SockDelete from "./SockDelete";
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
  const [socks, setSocks] = useState([]);
  let [image, setImage] = useState({});
  useEffect(() => {
    let sockService = new SockService();
    sockService.getAllSock().then((result) => setSocks(result.data.data));
  }, [socks]);

  const updateSockImageValues = () => {
    // cvService.getByCandidateId(id).then((result) => {setCv(result.data.data)})
    let sockService = new SockService();
    sockService.getBySockId(28).then((result)=>setImage(result.data.data)) 
  }

  return (
    <>
      <React.Fragment>
        {socks.map((sock, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>{sock.id}</TableCell>
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
            {/* <SockImageUpload id={24} updateSockImageValues={updateSockImageValues} /> */}
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
  const [openSock, setOpenSock] = useState(false);
  const [openImage, setOpenImage] = useState(false);

  const handleOpenSock = () => setOpenSock(true);
  const handleCloseSock = () => setOpenSock(false);

  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);


  return (
    <div className="my-component" style={{ marginTop: "4rem" }}>
      <Button style={{float:"right"}} onClick={handleOpenSock}>EKLE</Button>
      <Modal
        open={openSock}
        onClose={handleCloseSock}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SockAdd />
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
