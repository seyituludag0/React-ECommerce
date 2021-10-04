import React from "react";
import { CardContent, CardActions, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"


export default function CategoryCard() {
  return (
    <div>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Kategori Panel
          </Typography>
          <Typography variant="body2">
            Kategori ekle, kategori güncelle yada kategori sil 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/categoryeditpage" style={{ color:"#000" }} size="small">Kategori düzenleme sayfasına git</Link>
        </CardActions>
      </React.Fragment>
    </div>
  );
}
