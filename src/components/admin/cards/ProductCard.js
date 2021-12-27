import React from "react";
import { CardContent, CardActions, Typography } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function ProductCard() {
  return (
      <div>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Ürün Panel
          </Typography>
          <Typography variant="body2">
            Ürün ekle, Ürün güncelle yada Ürün sil 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/producteditpage" style={{ color:"#000" }} size="small">Ürün düzenleme sayfasına git</Link>
        </CardActions>
      </React.Fragment>
    </div>
  );
}
