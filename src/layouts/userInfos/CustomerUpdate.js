import React from "react";
import "./userInfos.css";
import { useFormik } from "formik";
import UserService from "../../services/UserService";
import { Form, Grid, Button } from "semantic-ui-react";
import { Input } from "@material-ui/core";
import { toast } from "react-toastify";

export default function CustomerUpdate({ customer }) {


  const formik = useFormik({
    initialValues: {
      id: customer?.id,
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      userName: customer?.userName,
      phoneNumber: customer?.phoneNumber,
      email: customer?.email,
      password: customer?.password
    },
    enableReinitialize: true,
    // validationSchema: validationRules,
    onSubmit: (values) => {
      let userService = new UserService();
      userService.customerUpdate(values)
        .then((result) => toast.success(result.data.message))
        .catch((error) => toast.error("HATA"));
    },
  });

  
  return (
    <div className="d-md-flex half">
        <form onSubmit={formik.handleSubmit}>
                <div>
                  <Form.Field>
                    <Grid stackable>
                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="firstName"
                          name="firstName"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          onBlur={formik.handleBlur}
                          type="text"
                          error={formik.errors.firstName}
                          placeholder="Ad"
                          autoFocus
                        />
                        {formik.errors.firstName &&
                          formik.touched.firstName && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.firstName}
                            </div>
                          )}
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="lastName"
                          name="lastName"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          onBlur={formik.handleBlur}
                          type="text"
                          error={formik.errors.lastName}
                          placeholder="Soyad"
                        />
                        {formik.errors.lastName &&
                          formik.touched.lastName && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.lastName}
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
                          id="userName"
                          name="userName"
                          onChange={formik.handleChange}
                          value={formik.values.userName}
                          onBlur={formik.handleBlur}
                          type="text"
                          error={formik.errors.userName}
                          placeholder="Kullanıcı adı"
                        />
                        {formik.errors.userName &&
                          formik.touched.userName && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.userName}
                            </div>
                          )}
                      </Grid.Column>
                    </Grid>
                  </Form.Field>

                  <Form.Field>
                    <Grid stackable>
                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          onBlur={formik.handleBlur}
                          type="text"
                          error={formik.errors.email}
                          placeholder="Email"
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.email}
                          </div>
                        )}
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="phoneNumber"
                          name="phoneNumber"
                          onChange={formik.handleChange}
                          value={formik.values.phoneNumber}
                          onBlur={formik.handleBlur}
                          type="tel"
                          error={formik.errors.phoneNumber}
                          placeholder="Telefon Numarası"
                        />
                        {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.phoneNumber}
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
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          onBlur={formik.handleBlur}
                          type="password"
                          error={formik.errors.epasswordmail}
                          placeholder="Parola"
                        />
                         
                        {formik.errors.password &&
                          formik.touched.password && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.password}
                            </div>
                          )}
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                </div>
                <Button type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#fb771a",
                    margin: "25px 0px 15px 100px",
                  }}
                >
                  Bilgilerimi Güncelle
                </Button>
        </form>
  </div>
  );
}
