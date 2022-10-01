import React, { useEffect, useState } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import PayCard from "./PayCard";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CardUtils";
import ProductOrderService from "../../services/ProductOrderService";
import RegisteredCardService from "../../services/RegisteredCardService";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Switch, FormGroup, Box,Checkbox } from "@mui/material";
import { VisibilityRounded, VisibilityOffRounded } from "@material-ui/icons";
import { Card } from "semantic-ui-react";
import Alert from "@mui/material/Alert";
import { useHistory } from "react-router-dom";
import validationRules from "./ValidationRules";


export default function Payment() {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [myCards, setMyCards] = useState([]);
  const userId = localStorage.getItem("userId");
  const [selectedCard, setSelectedCard] = useState({});
  const [enteredCardNumber, setEnteredCardNumber] = useState(null)
  const [enteredFullName, setEnteredFullName] = useState(null)
  const [enteredExpirationDate, setEnteredExpirationDate] = useState(null)
  const [enteredCvc, setEnteredCvc] = useState(null)

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

  useEffect(() => {
    console.log("selectedCard", selectedCard);
    console.log();

    let registeredCardService = new RegisteredCardService();
    registeredCardService
      .getCardsByUserId(userId)
      .then((result) => setMyCards(result.data.data));
  }, []);

  const selectedCardFunc = (e, data) => {
    setSelectedCard(data);
    setEnteredCardNumber(data.cardNumber)
    setEnteredFullName(data.fullName)
    setEnteredExpirationDate(data.expirationDate)
    setEnteredCvc(data.cvc)
  };

  return (
    <>
    <div className="savedCardList">
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <p>KAYITLI KARTLARIM</p>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              icon={
                showCards !== true ? (
                  <VisibilityRounded />
                ) : (
                  <VisibilityOffRounded />
                )
              }
              checkedIcon={
                showCards !== false ? (
                  <VisibilityOffRounded />
                ) : (
                  <VisibilityRounded />
                )
              }
              checked={showCards}
              onChange={(event) => setShowCards(event.target.checked)}
            />
          }
          label={
            showCards !== true ? (
              <p>Kayıtlı Kartlarımı Göster</p>
            ) : (
              <p>Kayıtlı Kartlarımı Gösterme</p>
            )
          }
        />
      </FormGroup>
      {showCards === true ? (
        <>
          {myCards.length === 0 ? (
            <Alert severity="info">Kayıtlı Kartınız Bulunmamaktadır!</Alert>
          ) : (
            myCards.map((card, key) => (
              <Card style={{ height: "6rem" }} key={key}>
                <Card.Content onClick={(e) => selectedCardFunc(e, card)}>
                  <Card.Header>{card.cardNumber}</Card.Header>
                  <Card.Meta textAlign="right">
                    {card?.expirationDate}
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))
          )}
        </>
      ) : null}
    </Box>
    </div>
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
                <PayCard
                  number={values.cardNumber || ""}
                  name={values.fullName || ""}
                  expiry={values.expirationDate || ""}
                  cvc={values.cvc || ""}
                  focused={active}
                />
                <div>
                  <Field
                    name="cardNumber"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    maxlength={19}
                    placeholder="Kart Numarası"
                    initialValue={enteredCardNumber}
                    format={formatCreditCardNumber}
                  />
                </div>
                <div>
                  <Field
                    name="fullName"
                    component="input"
                    type="text"
                    initialValue={enteredFullName}
                    placeholder="Kart Üzerindeki Ad Soyad"
                  />
                </div>
                <div>
                  <Field
                    name="expirationDate"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    maxLength="4"
                    initialValue={enteredExpirationDate}
                    placeholder="Son Kullanma Tarihi"
                    format={formatExpirationDate}
                  />
                  <Field
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3}"
                    maxLength="3"
                    initialValue={enteredCvc}
                    placeholder="CVV"
                    format={formatCVC}
                  />
                </div>
                <div className="buttons">
                  <button type="submit" 
               disabled={submitting || pristine}
                  // disabled={ enteredCardNumber == null && enteredFullName == null && enteredExpirationDate == null && enteredCvv ? submitting || pristine : "" }
                  >
                      Öde
                    </button>
                  <button
                    type="submit"
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
