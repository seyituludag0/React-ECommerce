import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import OrderStateService from "../../services/OrderStateService";
import { Table, Button, Icon, Dropdown, Form } from "semantic-ui-react";
import { toast } from "react-toastify";
import "./styles.css"


export default function ProductOrderStateUpdate({ order }) {
    const [orderStates, setOrderStates] = useState([]);

    let orderStateService = new OrderStateService();
    const getOrderStates = () => {
      orderStateService.getAll().then((result)=>setOrderStates(result.data.data))
    }

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

  const style = {
    position:"relative",
    width:"100%",
    border:0,
    paddingTop:"10px",
    boxShadow:"none"
  };

  return (
    <div>
        <Table.Cell collapsing>
                <Form onSubmit={formik.handleSubmit}>
                <Form.Field style={style}>
                  <Dropdown
                    item
                    placeholder="Sipariş Durumu"
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "orderStateId")
                    }
                    onBlur={formik.onBlur}
                    id="orderStateId"
                    style={{position:"relative"}}
                    value={formik.values.orderStateId}
                    options={orderStatesOption}
                    onOpen={()=> getOrderStates()}
                  />

                  {formik.errors.orderStateId &&
                    formik.touched.orderStateId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.orderStateId}
                      </div>
                    )}
                </Form.Field>
                {/* <br /><br /><br /><br /><br /><br /><br /> */}
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
