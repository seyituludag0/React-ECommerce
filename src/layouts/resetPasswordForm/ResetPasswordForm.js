import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Input, Modal, Grid } from "semantic-ui-react";
import { toast } from "react-toastify";
import UserService from "../../services/UserService";

export default function ResetPasswordForm() {
  let userService = new UserService();

  const formik = useFormik({
    initialValues: {
      token: "",
      newPassword: "",
      validatePassword: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("values: ", values)
      userService
        .resetPassword(values)
        .then((result) => toast.success(result.data.message));
    },
  });

  return (
    <div className="d-md-flex half">
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="form-block mx-auto">
                <div className="text-center mb-5">
                  <h3>Şifrenizi Değiştirin</h3>
                </div>

                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="newPassword"
                            name="newPassword"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            error={formik.errors.newPassword}
                            placeholder="Yeni Şifrenizi Giriniz"
                            autoFocus
                          />
                          {formik.errors.newPassword &&
                            formik.touched.newPassword && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.newPassword}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="validatePassword"
                            name="validatePassword"
                            value={formik.values.validatePassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            error={formik.errors.validatePassword}
                            placeholder="Yeni Şifrenizi Tekrar Giriniz"
                          />
                          {formik.errors.validatePassword &&
                            formik.touched.validatePassword && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.validatePassword}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="token"
                            name="token"
                            value={formik.values.token}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            error={formik.errors.token}
                            placeholder="Tokeninizi Giriniz"
                          />
                          {formik.errors.token &&
                            formik.touched.token && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.token}
                              </div>
                            )}
                        </Grid.Column>
                      </Grid>
                    </Form.Field>
                  </div>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#fb771a",
                      margin: "25px 0px 15px 100px",
                    }}
                  >
                    Onayla
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
