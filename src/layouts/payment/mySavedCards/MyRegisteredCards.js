import React, { useEffect, useState } from "react";
import "./style.css";
import RegisteredCardService from "../../../services/RegisteredCardService";
import Alert from '@mui/material/Alert';
import { Icon } from "semantic-ui-react";
import { toast } from "react-toastify";


export default function MyRegisteredCards() {
  const [myCards, setMyCards] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    let registeredCardService = new RegisteredCardService();
    registeredCardService
      .getCardsByUserId(userId)
      .then((result) => setMyCards(result.data.data));
  }, []);

  const deleteCard = (id) => {
    let registeredCardService = new RegisteredCardService();
    registeredCardService.deleteRegisteredCard(id).then(result=>toast.success(result.data.message));
}

  return (
    <div>
      <Alert severity="success">Kayıtlı Kartlarım</Alert>
      {myCards.length === 0 ? (
        <Alert severity="info">Kayıtlı Kartınız Bulunmamaktadır!</Alert>
      ) : (
        myCards.map((card) => (
          <div className="cards row">
            <div className="col-md-4" style={{ marginLeft: "10px" }}>
              <div
                className="card"
                style={{ display: "block", height: "260px" }}
              >
                <button
                  style={{
                    border: "none",
                    paddingRight: "21px",
                    float: "right",
                    background: "no-repeat",
                    paddingTop: "10px",
                  }}
                  className="delete-button"
                >
                  <Icon name="trash" size="big" onClick={()=>deleteCard(card.id)} />
                </button>
                <div className="card-body" style={{ paddingTop: "40px" }}>
                  <ul className="list-group list-group-flush">
                    <img
                      style={{
                        width: "55px",
                        right: "10px",
                        position: "absolute",
                      }}
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    />
                    <li className="list-group fs-2 cardNumber ">
                    {card.cardNumber}
                    </li>
                    <p className="validtext">VALID THRU</p>
                    <li className="list-group expirationDate">{card.expirationDate}</li>
                    <li className="list-group fs-5 cardOwner">{card.fullName}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
