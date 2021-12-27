import React from 'react'
import { Grid, Card } from "@material-ui/core"
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import BrandCard from './BrandCard';
import CampaignManagementCard from './CampaignManagementCard';

export default function SpacingGrid() {
    return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12} style={{marginTop:"10rem"}}>
          <Grid container justifyContent="center" style={{marginTop:"2rem"}}>
              <Grid item style={{display:"contents"}}>
               <Link to="/producteditpage"><Card variant="outlined"><ProductCard /></Card></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/categoryeditpage"><Card variant="outlined"><CategoryCard /></Card></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/brandeditpage"><Card variant="outlined"><BrandCard /></Card></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/campaignmanagementeditpage"><Card variant="outlined"><CampaignManagementCard /></Card></Link>
              </Grid>
          </Grid>
        </Grid>
    </Grid>
  </div>
    );
}