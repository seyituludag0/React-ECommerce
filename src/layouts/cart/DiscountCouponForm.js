import React from "react";
import { useFormik } from "formik";
import CampaignManangementService from "../../services/CampaignManagementService";
import { toast } from "react-toastify";
import { Form, Input } from "semantic-ui-react";
import { CartContextValue } from "../../contexts/ContextProvider";

export default function DiscountCouponForm() {
  const formik = useFormik({
    initialValues: {
      couponCode: "",
    },
    onSubmit: (couponCode) => {
      console.log(couponCode);
      let campaignManangementService = new CampaignManangementService();
      campaignManangementService
        .verifyCouponCode(couponCode.couponCode)
        .then((result) => toast.success(result.data.message))
        .catch("HATA");
        
    },
  });



  return (
    <div className="cart__discount">
      <h6>İndirim Kodu Uygula</h6>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Input
            placeholder="Kupon Kodu"
            error={Boolean(formik.errors.couponCode).toString()}
            value={formik.values.couponCode}
            name="couponCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.couponCode && formik.touched.couponCode && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.couponCode}
            </div>
          )}
        </Form.Field>
        <button>Uygula</button>
      </Form>
    </div>
  );
}
