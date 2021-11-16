import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import CampaignManagementService from "../../../services/CampaignManagementService";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Grid,
  Input,
  TextArea,
  Modal,
  Icon,
  Dropdown,
} from "semantic-ui-react";

export default function CampaignUpdate({ campaign }) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: campaign?.id,
      campaignName: campaign?.campaignName,
      couponCode: campaign?.couponCode,
      campaignExpiredDate: campaign?.campaignExpiredDate,
      campaignDetails: campaign?.campaignDetails,
    },
    // validationSchema: validationRules,
    onSubmit: (campaign) => {
      let campaignManagementService = new CampaignManagementService();
      campaignManagementService
        .update(campaign)
        .then((result) => toast.success(result.data.message))
        .catch("HATA!");
    },
  });


  
  const myStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65rem",
    height: "45rem",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        style={myStyle}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button style={{ backgroundColor: "transparent" }}>Güncelle</Button>
        }
      >
        <Modal.Header>Kampanya Güncelle</Modal.Header>
        <Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Input
                placeholder="Kampanya Adı"
                error={Boolean(formik.errors.campaignName).toString()}
                value={formik.values.campaignName}
                name="campaignName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.campaignName && formik.touched.campaignName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.campaignName}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Kupon Kodu"
                error={Boolean(formik.errors.couponCode).toString()}
                value={formik.values.couponCode}
                name="couponCode"
                disabled
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.couponCode && formik.touched.couponCode && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.couponCode}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                style={{ width: "100%" }}
                type="date"
                error={Boolean(formik.errors.campaignExpiredDate)}
                value={formik.values.campaignExpiredDate}
                onBlur={formik.handleBlur}
                name="campaignExpiredDate"
                placeholder="Kampanyanın Bitiş Tarihi"
              />
              {formik.errors.campaignExpiredDate &&
                formik.touched.campaignExpiredDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.campaignExpiredDate}
                  </div>
                )}
            </Form.Field>
            <Form.Field>
              <TextArea
                placeholder="Açıklama"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.campaignDetails).toString()}
                value={formik.values.campaignDetails}
                name="campaignDetails"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.campaignDetails && formik.touched.campaignDetails && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.campaignDetails}
                </div>
              )}
            </Form.Field>
            <Button
              content="Güncelle"
              labelPosition="right"
              icon="pencil"
              primary
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}
