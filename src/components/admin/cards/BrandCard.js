import React from "react";
import { CardContent, CardActions, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function BrandCard() {
  return (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Marka Panel
          </Typography>
          <Typography variant="body2">
            Marka ekle, marka güncelle yada marka sil 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/brandeditpage" style={{ color:"#000" }} size="small">Marka düzenleme sayfasına git</Link>
        </CardActions>
      </React.Fragment>
  );
}
