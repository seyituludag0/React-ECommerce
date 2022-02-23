import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Advertisement, Grid, Image } from "semantic-ui-react";
import CampaignManagementService from "../../../services/CampaignManagementService";


export default function CampaignTopBanner() {
  const [campaign, setCampaign] = useState({});
  let campaignManagementService = new CampaignManagementService();

  useEffect(() => {
    campaignManagementService
      .getRandomCampaign()
      .then((result) => setCampaign(result.data.data));
  }, []);

  return (
    <Advertisement unit="large leaderboard">
      <Link to={`/campaigndetails/${campaign.id}`}>
        {/* <img
          src="https://tpc.googlesyndication.com/simgad/2269627605629695107?"
          alt={campaign.campaignName}
        /> */}
      </Link>
    </Advertisement>
  );
}
