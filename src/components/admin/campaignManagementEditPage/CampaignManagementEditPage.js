import React, { useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Box,
  Button,
  Paper,
  TableBody,
  Tooltip,
} from "@material-ui/core";
import CampaignManagementService from "../../../services/CampaignManagementService";
import CampaignUpdate from "./CampaignUpdate";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CampaignDelete from "./CampaignDelete";
import CampaignCreate from "./CampaignCreate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65rem",
  height: "45rem",
  boxShadow: 24,
  p: 4,
};
function Row() {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    let campaignManagementService = new CampaignManagementService();
    campaignManagementService
      .getAll()
      .then((result) => setCampaigns(result.data.data));
  }, [campaigns]);
  const [copiedText, setCopiedText] = useState();

  return (
    <>
      <React.Fragment>
        {campaigns.map((campaign, key) => (
          <TableRow key={key} sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>{campaign.id}</TableCell>
            <TableCell component="th" scope="row">
              {campaign.campaignName}
            </TableCell>
            <TableCell align="right">
              {campaign.couponCode}{" "}
              <Tooltip
                title={
                  copiedText === campaign.couponCode
                    ? "Kupon Kodu Kopyalandı!"
                    : "Kupon Kodunu Kopyala"
                }
                placement="top"
              >
                <CopyToClipboard
                  onCopy={() => setCopiedText(campaign.couponCode)}
                  text={campaign.couponCode}
                >
                  <FontAwesomeIcon icon={faCopy} />
                </CopyToClipboard>
              </Tooltip>
            </TableCell>
            <TableCell align="right">{campaign.discountRate}</TableCell>
            <TableCell align="right">{campaign.campaignExpiredDate}</TableCell>
            <TableCell align="right">{campaign.campaignDetails}</TableCell>
            <TableCell align="right">
              <CampaignUpdate campaign={campaign} />
            </TableCell>
            <TableCell align="right"><CampaignDelete id={campaign.id} /></TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    </>
  );
}

export default function CampaignManagementEditPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="my-component" style={{ marginTop: "4rem" }}>
      <Button style={{ float: "right" }} onClick={handleOpen}>
        EKLE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}><CampaignCreate /></Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Kampanya Id</TableCell>
              <TableCell>Kampanya Adı</TableCell>
              <TableCell align="right">Kupon kodu</TableCell>
              <TableCell align="right">İndirim Oranı</TableCell>
              <TableCell align="right">Kampanyanın Bitiş Tarihi</TableCell>
              <TableCell align="center">Kampanya Detayları</TableCell>
              <TableCell align="right">Güncelle</TableCell>
              <TableCell align="right">Sil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
