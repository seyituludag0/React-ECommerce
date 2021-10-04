import React from 'react'
import { Grid, Card } from "@material-ui/core"
import { Link } from 'react-router-dom';
import SockCard from './SockCard';
import CategoryCard from './CategoryCard';
import BrandCard from './BrandCard';

export default function SpacingGrid() {
    return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12} style={{marginTop:"10rem"}}>
          <Grid container justifyContent="center" style={{marginTop:"2rem"}}>
              <Grid item style={{display:"contents"}}>
               <Link to="/admin"><Card variant="outlined"><SockCard /></Card></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/admin"><Card variant="outlined"><CategoryCard /></Card></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/admin"><Card variant="outlined"><BrandCard /></Card></Link>
              </Grid>
          </Grid>
        </Grid>
    </Grid>
  </div>
    );
}