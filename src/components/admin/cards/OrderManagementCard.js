import React from "react";
import { CardContent, CardActions, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function OrderManagement() {
  return (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
          Sipariş Takip Panel
          </Typography>
          <Typography variant="body2">
            Siparişleri yönet 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/ordermanagement" style={{ color:"#000" }} size="small">Sipariş takip sayfasına git</Link>
        </CardActions>
      </React.Fragment>
  );
}
