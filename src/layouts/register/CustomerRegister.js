import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import { useFormik } from "formik";
import UserService from "../../services/UserService";
import validationRules from "./validationRules";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import BasketService from "../../services/BasketService";

export default function Register() {

  let history = useHistory();
  let basketService = new BasketService();

  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log(user);
    Object.keys(user).length > 0 && basketService.add(user);
  }, [user]);


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    validationSchema: validationRules,
    onSubmit: (values) => {
      console.log("Values: ", values);
      let userService = new UserService();
      userService.customerRegister(values)
        .then((result) => toast.success(result.data.message))
        .catch((error) => toast.error("HATA"));
      history.push("/activationcodeverification");
    },
  });



  return (
    <div className="d-md-flex half">
      <div
        className="background"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/uludag-sock/image/upload/v1632418721/bg_1_xrmebo.jpg')",
        }}
      />
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="form-block mx-auto">
                <div className="text-center mb-5">
                  <h3>Kayıt Ol</h3>
                </div>

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
                    Kaydol
                  </Button>
                </form>

                <span
                  style={{
                    margin: "25px 0px 0px 74px",
                  }}
                >
                  Zaten üye misin? Hemen
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "rgb(251, 119, 26)",
                    }}
                  >
                    {" "}
                    giriş yap
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
