import React, { useEffect, useState } from "react";
import { Card, Table } from "semantic-ui-react";
import { Button } from "@material-ui/core";
import ProductOrderService from "../../services/ProductOrderService";
import OrderStateService from "../../services/OrderStateService";
import ProductOrderStateUpdate from "./ProductOrderStateUpdate";
import { useHistory } from "react-router-dom"
import { ArrowLeftSharp } from "@material-ui/icons"

export default function ProductOrderList() {
  const [orders, setOrders] = useState([]);
  const [orderStates, setOrderStates] = useState([]);
  const history = useHistory();

  let orderService = new ProductOrderService();
  let orderStateService = new OrderStateService();

  useEffect(() => {
    orderService.expectedOrders().then((result) => setOrders(result.data.data));
    orderStateService
      .getAll()
      .then((result) => setOrderStates(result.data.data));
  }, [orders]);

  return (
    <div>
      <Button onClick={()=> history.goBack()} variant="outlined" startIcon={<ArrowLeftSharp />}>
          Bir Önceki Sayfaya Dön
      </Button>
      <Card
        fluid
        color="blue"
        header="TÜM SİPARİŞLER"
        style={{ height: "4rem", textAlign: "center" }}
      />
      {orders.length == 0 ? (
        <>Sipariş Tablonuz Boş</>
      ) : (
        <>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>SİPARİŞ NUMARASI</Table.HeaderCell>
                <Table.HeaderCell>ALICI ADI SOYADI</Table.HeaderCell>
                <Table.HeaderCell>ÜRÜN</Table.HeaderCell>
                <Table.HeaderCell>ADET</Table.HeaderCell>
                <Table.HeaderCell>SİPARİŞ SAATİ</Table.HeaderCell>
                <Table.HeaderCell>SİPARİŞ TUTARI</Table.HeaderCell>
                <Table.HeaderCell>SİPARİŞ DURUMU</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {orders.map((order) => (
                <Table.Row key={order.id}>
                  <Table.HeaderCell>{order.orderNumber}</Table.HeaderCell>
                  <Table.Cell>
                    {order.customer.firstName} {order.customer.lastName}
                  </Table.Cell>
                  <Table.Cell>{order.product.name}</Table.Cell>
                  <Table.Cell>{order.quantity}</Table.Cell>
                  <Table.Cell>{order.orderDate}</Table.Cell>
                  <Table.Cell>{order.price}₺</Table.Cell>
                  <Table.Cell>
                    <ProductOrderStateUpdate order={order} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
}
