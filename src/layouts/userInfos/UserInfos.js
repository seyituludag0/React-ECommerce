import React from "react";
import "./userInfos.css";
import { Person } from "@material-ui/icons";
import { useFormik } from "formik";
import UserService from "../../services/UserService";
import { Form, Grid, Button } from "semantic-ui-react";
import { Input } from "@material-ui/core";
import { toast } from "react-toastify";

export default function UserInfos({ user }) {

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      userName: user?.userName,
      phoneNumber: user?.phoneNumber,
      email: user?.email,
      password: user?.password
    },
    // validationSchema: validationRules,
    onSubmit: (values) => {
      console.log("Values: ", values);
      let userService = new UserService();
      userService.Regsister(values)
        .then((result) => toast.success(result.data.message))
        .catch((error) => toast.error("HATA"));
    },
  });


  return (
    <div>
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0" style={{margin:"0px 0px 0px 35rem"}}>
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <Person style={{ fontSize: "10rem" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">
                      Connect
                    </a>
                    <p>EZGİ ULUDAG</p>
                    <a href="#" className="btn btn-sm btn-default float-right">
                      Message
                    </a>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
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
                          {/* <FilledInput
                            style={{ width: "23rem" }}
                            id="password"
                            name="password"
                            type={values.showPassword ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          /> */}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
