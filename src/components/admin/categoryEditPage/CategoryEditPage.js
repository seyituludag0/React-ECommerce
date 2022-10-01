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
import CategoryService from "../../../services/CategoryService";
import CategoryAdd from "./CategoryAdd"
import CategoryUpdate from "./CategoryUpdate"
import CategoryDelete from "./CategoryDelete"
import { ArrowLeftSharp } from "@material-ui/icons"
import { useHistory } from "react-router-dom";
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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
  }, [categories]);

  return (
    <>
      <React.Fragment>
        {categories.map((category, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell component="th" scope="row">
              {category.name}
            </TableCell>
            <TableCell align="right">
              <CategoryUpdate category={category} />
            </TableCell>
            <TableCell align="right">
            <CategoryDelete id={category.id} />
            </TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}

export default function CategoryEditPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  
  return (
    <div className="my-component" style={{ marginTop: "4rem" }}>
      <Button onClick={()=> history.goBack()} variant="outlined" startIcon={<ArrowLeftSharp />}>
     Bir Önceki Sayfaya Dön
  </Button>
      <Button style={{ float: "right" }} onClick={handleOpen}>
        Ekle
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CategoryAdd />
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Kategori</TableCell>
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
