import { useFormik } from "formik";
import React from "react";
import BrandService from "../../../services/BrandService";
import {
  Button,
  Input,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import { toast } from "react-toastify";
export default function BrandAdd() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    // validationSchema: validationRules,
    onSubmit: (brand) => {
        let brandService = new BrandService();
        brandService.add(brand).then((result)=>toast.success(result.data.message)).catch("HATA!")
    },
  });

 

  return (
    <div className="my-div">
      <Grid.Column>
          <Card fluid>
            <Card.Content header="Marka Ekle" />
            <Card.Content>
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
                
                <Button content="Ekle"
                  labelPosition="right"
                  icon="add"
                  primary
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
              </Form>
            </Card.Content>
          </Card>
      </Grid.Column>
    </div>
  );
}
