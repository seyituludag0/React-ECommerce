import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper, Divider } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import FavoriteService from "../../services/FavoriteService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"

export default function FavoriteProductItems() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService
      .getFavorites()
      .then((result) => setFavorites(result.data.data));
  }, [favorites]);

  const removeFromFavorite = (sockId) => {
    let favoriteService = new FavoriteService();
    favoriteService
      .removeFromFavorites(56, sockId)
      .then((result) => toast.success(result.data.message));
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "70%",
    maxHeight: "100%",
  });

  return (
    <Paper
      sx={{ p: 2, margin: "auto", maxWidth: 50, flexGrow: 1 }}
      className="paper"
    >
      <Grid container spacing={2} style={{ overflow: "scroll" }}>
        <Grid item xs={12} sm container>
          {favorites.length == 0 ? (
            <Typography
              sx={{ cursor: "pointer" }}
              variant="body2"
            >
              Henüz favori ürününüz yok! Hemen favori ürününü bulmak için
              ürünler sayfasına <Link to="/socks">göz at</Link>
            </Typography>
          ) : (
            favorites.map((favorite) => (
              <Link to={`/sock-detail/${favorite.sock.id}`}>
                
              <Grid container spacing={2} key={favorite.id}>
                <Grid>
                  <div
                    sx={{ width: 128, height: 128 }}
                    style={{
                      display: "grid",
                      marginLeft: "-6rem",
                      marginRight: "-6rem",
                    }}
                    className="mydiv"
                  >
                    <Img
                      src={favorite.sock.sockImage.image1}
                      style={{ width: "35%" }}
                    />
                  </div>
                </Grid>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {/* <Link to="/">{favorite.sock.name}</Link> */}{favorite.sock.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Category: {favorite.sock.category.name}
                    </Typography>
                    <Typography variant="body2">
                      Size: {favorite.sock.bodySize}
                    </Typography>
                  </Grid>
                  <Grid item style={{ padding: "1rem", marginLeft: "13rem" }}>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() => removeFromFavorite(favorite.sock.id)}
                    >
                      Kaldır
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    style={{ marginLeft: "22rem", marginTop: "-9rem" }}
                  >
                    {favorite.sock.price}₺
                  </Typography>
                </Grid>
              </Grid>
            
              </Link>
            ))
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
