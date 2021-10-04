import React from "react";
import { CardContent, CardActions, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom"

export default function SockCard() {
  return (
      <div>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} >
            Çorap Panel
          </Typography>
          <Typography variant="body2">
            Çorap ekle, çorap güncelle yada çorap sil 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/sockeditpage" style={{ color:"#000" }} size="small">Çorap düzenleme sayfasına git</Link>
        </CardActions>
      </React.Fragment>
    </div>
  );
}
