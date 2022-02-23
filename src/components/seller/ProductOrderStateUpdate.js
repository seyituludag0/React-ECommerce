import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import OrderStateService from "../../services/OrderStateService";
import { Table, Button, Icon, Dropdown, Form } from "semantic-ui-react";
import { toast } from "react-toastify";


export default function ProductOrderStateUpdate({ order }) {
    let orderStateService = new OrderStateService();
    const [orderStates, setOrderStates] = useState([]);

  useEffect(()=>{
    orderStateService.getAll().then((result)=>setOrderStates(result.data.data))
},[orderStates])

  const formik = useFormik({
    initialValues: {
      orderId: order.id,
      orderStateId: order.orderState?.id,
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(orderStates);
      orderStateService
        .productOrderStateUpdate(values)
        .then((result) => toast.success(result.data.message));
    },
  });


  

  const orderStatesOption = orderStates.map((orderState, index) => ({
    key: index,
    text: orderState.state,
    value: orderState.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
        <Table.Cell collapsing>
                <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                  <Dropdown
                    item
                    placeholder="Sipariş Durumu"
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "orderStateId")
                    }
                    onBlur={formik.onBlur}
                    id="orderStateId"
                    value={formik.values.orderStateId}
                    options={orderStatesOption}
                  />

                  {formik.errors.orderStateId &&
                    formik.touched.orderStateId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.orderStateId}
                      </div>
                    )}
                </Form.Field>
                <br /><br /><br /><br /><br /><br /><br />
                <Button
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Siparişi Güncelle
                </Button>
                </Form>
              </Table.Cell>
    </div>
  );
}
