import React, { useState, useEffect } from "react";
import { Grid, Image } from "semantic-ui-react";
import CampaignManagementService from "../../services/CampaignManagementService";
export default function CampaignLeftBanner() {
  const [campaign, setCampaign] = useState({});
  let campaignManagementService = new CampaignManagementService();

  useEffect(() => {
    console.log("camp", campaign);
    campaignManagementService
      .getRandomCampaign()
      .then((result) => setCampaign(result.data.data));
  }, []);

  return (
    <Grid.Column width={2}>
      <Image
        src={campaign.campaignBannerImage}
        style={{ height: "64%" }}
      />
    </Grid.Column>
  );
}
