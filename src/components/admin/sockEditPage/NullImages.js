import React, { useState, useEffect } from "react";
import SockImageService from "../../../services/SockImageService";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from "@material-ui/core";
import SockImageUpload from "../../SockImageUpload"


export default function NullImages() {
  const [nullImages, setNullImages] = useState([]);

  useEffect(() => {
    let sockImageService = new SockImageService();
    sockImageService
      .getAllSockImageNull()
      .then((result) => setNullImages(result.data.data));
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Çorap Id</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <React.Fragment>
        {nullImages.map((image, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell component="th" scope="row">
              {image.sockId}
            </TableCell>
            <TableCell align="right"> 
            <SockImageUpload id={image.id} />
            </TableCell>
            
            
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}
// 