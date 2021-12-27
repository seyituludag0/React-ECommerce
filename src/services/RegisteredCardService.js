import axios from "axios";

export default class RegisteredCardService{
    

    getCardsByUserId(userId){
        return axios.get("http://localhost:8080/api/registeredCards/getCardsByUserId?userId=" + userId)
    }

    saveCard(card){
        return axios.post("http://localhost:8080/api/registeredCards/saveCard", card)
    }

    deleteRegisteredCard(id){
        return axios.post(`http://localhost:8080/api/registeredCards/deleteRegisteredCard/${id}`)
    }

}