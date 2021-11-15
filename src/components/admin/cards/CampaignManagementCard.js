import React from "react";
import { CardContent, CardActions, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function BrandCard() {
  return (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
          Kampanya Panel
          </Typography>
          <Typography variant="body2">
            Kampanya ekle, kampanya güncelle yada kampanya sil 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/campaignmanagementeditpage" style={{ color:"#000" }} size="small">Kampanya düzenleme sayfasına git</Link>
        </CardActions>
      </React.Fragment>
  );
}
