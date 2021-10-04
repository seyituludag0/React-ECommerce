import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import BrandService from "../../../services/BrandService";
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

export default function BrandUpdate({ brand }) {
  const [open, setOpen] = useState(false);

  let formik = useFormik({
    initialValues: {
      name: brand?.name,
      brandId: brand?.id,
    },
    // validationSchema: validationRules,
    onSubmit: (brand) => {
      let brandService = new BrandService();
      brandService
        .update(brand)
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
    // bgcolor: "gray",
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
        trigger={<Button style={{backgroundColor:"transparent"}}>Güncelle</Button>}
      >
        <Modal.Header>Marka Güncelle</Modal.Header>
        <Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Input
                placeholder="Marka Adı"
                error={Boolean(formik.errors.name).toString()}
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.name}
                </div>
              )}
            </Form.Field>
            <Button
              content="Ekle"
              labelPosition="right"
              icon="add"
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
