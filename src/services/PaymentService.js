import axios from "axios";

export default class PaymentService{

    payment(payment){
        return axios.post("http://localhost:8080/api/payments/payment", payment)
    }

}