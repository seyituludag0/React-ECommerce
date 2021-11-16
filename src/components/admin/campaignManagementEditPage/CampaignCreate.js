import { useFormik } from "formik";
import SockImageUpload from "../../../components/SockImageUpload";
import React, { useEffect, useState } from "react";
import SockService from "../../../services/SockService";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
import ColorService from "../../../services/ColorService";
// import validationRules from "./validationRules";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import CampaignManagementService from "../../../services/CampaignManagementService";
export default function CampaignCreate() {
  const formik = useFormik({
    initialValues: {
      campaignName: "",
      couponCode: "",
      campaignExpiredDate: "",
      campaignDetails: "",
    },
    // validationSchema: validationRules,
    onSubmit: (campaign) => {
        console.log(campaign);
      let campaignManagementService = new CampaignManagementService();
      campaignManagementService
        .create(campaign)
        .then((result) => toast.success(result.data.message))
        .catch("HATA!");
    },
  });

  return (
    <div className="my-div">
      <Grid.Column>
        <div className="xxxxxxx" style={{ marginTop: "-4rem" }}>
          <Card fluid>
            <Card.Content header="Kampanya Oluştur" />
            <Card.Content>
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
                  {formik.errors.campaignName &&
                    formik.touched.campaignName && (
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
                  {formik.errors.campaignDetails &&
                    formik.touched.campaignDetails && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.campaignDetails}
                      </div>
                    )}
                </Form.Field>
                <Button
                  content="Kampanyayı Oluştur"
                  labelPosition="right"
                  icon="pencil"
                  primary
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
              </Form>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
    </div>
  );
}
