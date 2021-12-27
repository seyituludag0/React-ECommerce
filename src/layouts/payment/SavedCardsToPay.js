import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import MyRegisteredCards from './payment/mySavedCards/MyRegisteredCards';
import { VisibilityRounded, VisibilityOffRounded } from "@material-ui/icons";
import Cards from "./mySavedCards/Cards";
import RegisteredCardService from "../../services/RegisteredCardService";
import { Card } from "semantic-ui-react";
import Alert from "@mui/material/Alert";

export default function SavedCardsToPay() {
  const [showCards, setShowCards] = useState(false);
  const [myCards, setMyCards] = useState([]);
  const userId = localStorage.getItem("userId");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    console.log("selectedCard", selectedCard);
    let registeredCardService = new RegisteredCardService();
    registeredCardService
      .getCardsByUserId(userId)
      .then((result) => setMyCards(result.data.data));
  }, []);

  const selectedCardFunc = (e, data) => {
    setSelectedCard(data);
  };

  return (
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
  );
}
