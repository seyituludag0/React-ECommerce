import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import ProductOrderService from "../../services/ProductOrderService";
import OrderStateService from "../../services/OrderStateService";
import { useFormik } from "formik";
import ProductOrderList from "./ProductOrderList";

export default function OrderManagementPanel() {
  return (
    <div>
      <ProductOrderList />
      
    </div>
  );
}
