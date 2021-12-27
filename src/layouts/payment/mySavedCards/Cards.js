import React, { useState, useEffect } from "react";
import RegisteredCardService from "../../../services/RegisteredCardService";
import { Card } from "semantic-ui-react";
import Alert from "@mui/material/Alert";


export default function Cards({ card }) {
  const [myCards, setMyCards] = useState([]);
  const userId = localStorage.getItem("userId");
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    let registeredCardService = new RegisteredCardService();
    registeredCardService
      .getCardsByUserId(userId)
      .then((result) => setMyCards(result.data.data));
  }, []);

 

  const selectedCardFunc = (e, data) => {
    setSelectedCard(data)
  }

  return (
    <div>
      { selectedCard === null ? null : <p>{`Ödemeyi sonu ${selectedCard?.cardNumber.substring(15,19)} ile biten kartınızla yapacaksınız!`}</p> }
      <Alert severity="success">Kayıtlıefg Kartlarım</Alert>
      {myCards.length === 0 ? (
        <Alert severity="info">Kayıtlı Kartınız Bulunmamaktadır!</Alert>
      ) : (
        myCards.map((card) => (
          <Card style={{ height: "6rem" }}>
            <Card.Content onClick={(e)=>selectedCardFunc(e, card)}>
              <Card.Header>{card.cardNumber}</Card.Header>
              <Card.Meta textAlign="right">{card?.expirationDate}</Card.Meta>
            </Card.Content>
          </Card>
        ))
      )}
    </div>
  );
}
