import React from "react";
import { useFormik } from "formik";
import UserService from "../../services/UserService";

export default function ForgotPassword() {
 
  const formik = useFormik({
    initialValues:{
      email:""
    },
    onSubmit: (values) => {
      console.log(values);
      let userService = new UserService();
      userService.generateResetPasswordToken(values.email).then((result)=>result.data.message)
    },
  });


  return (
    <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
    <div className="form-gap" />
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4" style={{marginLeft:"25rem"}}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3><i className="fa fa-lock fa-4x" /></h3>
                <h2 className="text-center">Şifrenizi mi unuttunuz?</h2>
                <p>Şifrenizi buradan sıfırlayabilirsiniz</p>
                <div className="panel-body">
                  <form id="register-form" className="form" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue" /></span>
                        <input
                        className="form-control"
                            style={{ width: "100%" }}
                            id="email"
                            name="email"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            type="text"
                            error={formik.errors.email}
                            placeholder="Email"
                          />
                          {formik.errors.email &&
                            formik.touched.email && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.email}
                              </div>
                            )}
                      </div>
                    </div>
                    <div className="form-group">
                      <input name="recover-submit" className="btn btn-lg btn-primary btn-block" defaultValue="Reset Password" type="submit" />
                    </div>
                    <input type="hidden" className="hide" name="token" id="token" defaultValue /> 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
