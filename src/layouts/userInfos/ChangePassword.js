import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Form, Input, Modal, Grid } from "semantic-ui-react";
import { toast } from "react-toastify";
import UserService from "../../services/UserService";

export default function ChangePassword({ customer }) {
  const [open, setOpen] = useState(false);

  const myStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65rem",
    height: "20rem",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      userId: customer?.id,
      currentPassword: customer?.password,
      newPassword: customer,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
        let userService = new UserService();
        userService.changePassword(values)
        .then((result) => toast.success(result.data.message))
    },
  });



  return (
    <div>
      <Modal
        style={myStyle}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button style={{backgroundColor:"transparent"}}>Şifre Bilgilerimi Güncelle</Button>}
      >
        <Modal.Header>Güncelle</Modal.Header>
        <Modal.Description>
        <form onSubmit={formik.handleSubmit}>
                <div>
                  <Form.Field>
                    <Grid stackable>
                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="currentPassword"
                          name="currentPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="password"
                          error={formik.errors.currentPassword}
                          placeholder="Mevcut Şifrenizi Giriniz"
                          autoFocus
                        />
                        {formik.errors.currentPassword &&
                          formik.touched.currentPassword && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.currentPassword}
                            </div>
                          )}
                      </Grid.Column>

                      <Grid.Column width={8}>
                        <Input
                          style={{ width: "100%" }}
                          id="newPassword"
                          name="newPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="password"
                          error={formik.errors.newPassword}
                          placeholder="Yeni Şifrenizi Giriniz"
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

                </div>
                <Button type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#fb771a",
                    margin: "25px 0px 15px 100px",
                  }}
                >
                  Şifreni Güncelle
                </Button>
                {/* <ChangePassword /> */}
        </form>
        </Modal.Description>
      </Modal>
    </div>
  );
}
