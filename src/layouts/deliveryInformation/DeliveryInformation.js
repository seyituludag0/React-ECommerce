import React from 'react'
import { useFormik } from 'formik'
import { Form, TextArea, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function DeliveryInformation() {

  const history = useHistory(); 
    
    const formik = useFormik({
        initialValues:{
            deliveryAddress:"",
            userId:121
        },
        onSubmit:(values) => {
            history.push("/payment")
            // localStorage.setItem("deliveryAddressInformation", values.deliveryAddress)
        }
    })


    return (
        <div class="col-4">
            <h5>Teslimat Bilgileri</h5>
            <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
                      <TextArea
                        placeholder="Teslim Edilecek Adres"
                        style={{ minHeight: 100 }}
                        error={Boolean(formik.errors.deliveryAddress).toString()}
                        value={formik.values.deliveryAddress}
                        name="deliveryAddress"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.deliveryAddress &&
                        formik.touched.deliveryAddress && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.deliveryAddress}
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
        </div>
    )
}
