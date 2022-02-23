import React from "react";
import "./styles/styles.css";
import { useFormik } from "formik";
import validationRules from "./validationRules";
import { Form, Grid, Input } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import UserService from "../../services/UserService";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";


export default function Login() {
  let history = useHistory();
  const [state, dispatch] = useUserContext();
  let userService = new UserService();
  const userId = state?.authenticatedUser?.id;


  const handleLogin = () => {
    userService
      .login({
        userName: formik.values.userName,
        password: formik.values.password,
      })
      .then(redirect)
      .then(() => toast.success("Giriş Başarılı"))
      .catch(() => toast.error("Kulllanıcı adı veya şifre hatalı!"));
  };

  const redirect = ({ data }) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", userId);
    const roles = jwt_decode(data.token).roles.split(",");
    return roles.some((it) => it === "ROLE_ADMIN" || it === "ROLE_SUPER_ADMIN")
      ? historyAdmin()
      : historyUser();
  };

  function historyAdmin() {
    dispatch({ type: "SET_IS_ADMIN", payload: true });
    localStorage.setItem("isAdmin", true);
    localStorage.setItem("userName", formik.values.userName);
    dispatch({ type: "SET_USER", payload: formik.values.userName });
    history.push("/admin");
  }

  function historyUser() {
    dispatch({ type: "SET_USER", payload: formik.values.userName });
    localStorage.setItem("isAdmin", false);
    localStorage.setItem("userName", formik.values.userName);
    dispatch({ type: "SET_IS_ADMIN", payload: false });
    history.push("/");
  }

  // FORMIK
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationRules,
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
                  <h3>Giriş Yap</h3>
                </div>

                <form onSubmit={formik.handleSubmit}>
                  <div className>
                    <Form.Field>
                      <Grid stackable>
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="userName"
                            name="userName"
                            autoFocus
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
                        <Grid.Column>
                          <Input
                            style={{ width: "100%" }}
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            type="password"
                            error={formik.errors.password}
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
                  <span>
                    <Link
                      to="/forgotpassword"
                      style={{
                        textDecoration: "none",
                        color: "rgb(251, 119, 26)",
                      }}
                    >
                      Parolamı Unuttum
                    </Link>
                  </span>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#fb771a",
                      margin: "25px 0px 15px 100px",
                    }}
                    onClick={handleLogin}
                  >
                    Giriş Yap
                  </Button>
                </form>

                <span
                  style={{
                    margin: "25px 0px 0px 74px",
                  }}
                >
                  Henüz üye değil misiniz? Hemen
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: "rgb(251, 119, 26)",
                    }}
                  >
                    {" "}
                    üye ol
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
