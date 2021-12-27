import React from "react";
import { connect } from "react-redux";
import { Paper, Table, TableContainer } from "@mui/material";
import { styled } from "@material-ui/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "semantic-ui-react";
import { Close } from "@material-ui/icons";

class CompareTable extends React.Component {
  render() {
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
    return (
      <TableContainer component={Paper}>
        {
          this.props.products.length>0 ? (<Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>Karşılaştırılan Ürünler</TableHead>
          <TableHead>
            <TableRow>
              <StyledTableCell>Ürün Resmi</StyledTableCell>
              <StyledTableCell>Ürün Adı</StyledTableCell>
              <StyledTableCell>Kategori</StyledTableCell>
              <StyledTableCell>Marka</StyledTableCell>
              <StyledTableCell>Renk</StyledTableCell>
              <StyledTableCell>Beden/Numara</StyledTableCell>
              <StyledTableCell>Fiyat</StyledTableCell>
              <StyledTableCell align="right">X</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.products.map((product) => {
              return (
                <StyledTableRow key={product.id}>
                    <StyledTableCell component="th" scope="row">
                      <img
                        src={product.productImage.image1}
                        style={{ width: "100px" }}
                      />
                    </StyledTableCell>
                   <StyledTableCell>{product.name}</StyledTableCell>
                   <StyledTableCell>{product.category.name}</StyledTableCell>
                   <StyledTableCell>{product.brand.name}</StyledTableCell>
                   <StyledTableCell>{product.color.name}</StyledTableCell>
                   <StyledTableCell>{product.bodySize}</StyledTableCell>
                   <StyledTableCell>{product.price}₺</StyledTableCell>
                  </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>):null
        }
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.compareList,
  };
};

export default connect(mapStateToProps)(CompareTable);
