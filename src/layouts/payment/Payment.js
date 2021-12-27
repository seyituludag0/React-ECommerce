import React, { useState } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVV,
  formatExpirationDate,
} from "./CardUtils";
import ProductOrderService from "../../services/ProductOrderService";
import RegisteredCardService from "../../services/RegisteredCardService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Switch, FormGroup } from "@mui/material";
import SavedCardsToPay from "./SavedCardsToPay"


export default function Payment() {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let orderInformation = {
    deliveryAddress: "İstanbul",
    userId: localStorage.getItem("userId"),
  };

  const onSubmit = async (values) => {
    const myCardValues = {
      values: values.userId = userId,
      values: values,
    };

    // console.log("values", values);
    console.log("myCardValues", myCardValues);
    await sleep(300);
    let productOrderService = new ProductOrderService();
    productOrderService
      .productOrder(orderInformation)
      .then((result) => toast.success(result.data.message));
    let registeredCardService = new RegisteredCardService();
    if (isChecked) {
      registeredCardService
        .saveCard(myCardValues.values)
        .then((result) => toast.success(result.data.message));
    }
    await sleep(300)
    // history.push("/");
  };

  // Switch
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url(https://res.cloudinary.com/uludag-sock/image/upload/v1639258554/save_ruderr.png)`,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(https://res.cloudinary.com/uludag-sock/image/upload/v1639258423/close_f4wh7g.png)`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  // Switch

  return (
    <>
    <SavedCardsToPay />
      <Styles>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card
                  number={values.cardNumber || ""}
                  name={values.fullName || ""}
                  expirationDate={values.expirationDate || ""}
                  cvv={values.cvv || ""}
                  focused={active}
                />
                <div>
                  <Field
                    name="cardNumber"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Kart Numarası"
                    format={formatCreditCardNumber}
                  />
                </div>
                <div>
                  <Field
                    name="fullName"
                    component="input"
                    type="text"
                    placeholder="Kart Üzerindeki Ad Soyad"
                  />
                </div>
                <div>
                  <Field
                    name="expirationDate"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Son Kullanma Tarihi"
                    format={formatExpirationDate}
                  />
                  <Field
                    name="cvv"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVV"
                    format={formatCVV}
                  />
                </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting}>
                    Öde
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Alanları Temizle
                  </button>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch />}
                    label="Kartımı Kaydet"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                </FormGroup>
              </form>
            );
          }}
        />
      </Styles>
    </>
  );
}
