import React from "react";
// import ActivationCodeVerificationService from "../../services/ActivationCodeVerificationService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Card, Form, Grid } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
export default function ActivationCodeVerification() {
  const history = useHistory();
  const activationCodeScheme = Yup.object().shape({
    email: Yup.string().required("Bu alan boş geçilemez. Lütfen doldurunuz"),
  });

//   let activationCodeVerification = new ActivationCodeVerificationService();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: activationCodeScheme,
    onSubmit: (values) => {
    //   activationCodeVerification
    //     .activationCodeVerification(values.code)
    //     .then((result) => toast.success(result.data.message));
    //   history.push("/login");
    },
  });

  return (
    <div style={{ marginLeft: "27rem", marginRight: "25rem", marginTop: "11rem" }}>
      <Card.Group>
        <Card fluid color="red" header="EMAİL ADRESİNİZİ GİRİNİZ" />
      </Card.Group>

      <Grid padded>
        <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <Grid.Column width={8}>
                      <Input
                        style={{ width: "100%" }}
                        id="email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        placeholder="Email adresi"
                        autoFocus
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.email}
                        </div>
                      )}
                    </Grid.Column>
                  </Form.Field>

                  <Button
                    content="Gönder"
                    labelPosition="right"
                    icon="send"
                    primary
                    type="submit"
                    style={{ marginLeft: "20px" }}
                  />
                </Form>
              </Card.Content>
            </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}
