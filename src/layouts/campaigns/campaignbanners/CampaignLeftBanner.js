import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Advertisement, Grid, Image } from "semantic-ui-react";
import CampaignManagementService from "../../../services/CampaignManagementService";
export default function CampaignLeftBanner() {
  const [campaign, setCampaign] = useState({});
  let campaignManagementService = new CampaignManagementService();

  useEffect(() => {
    campaignManagementService
      .getRandomCampaign()
      .then((result) => setCampaign(result.data.data));
  }, []);
  return (
    <Grid.Column width={3}>
      <Advertisement unit="half banner">
        <Link to={`/campaigndetails/${campaign.id}`}>
          <img src={campaign.campaignBannerImage} alt={campaign.campaignName} />
        </Link>
      </Advertisement>
    </Grid.Column>
  );
}
