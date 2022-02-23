import axios from "axios";

export default class OrderStateService{

    getAll(){
        return axios.get("http://localhost:8080/api/orderStates/getAll")
    }

    productOrderStateUpdate(productOrder){
        return axios.post("http://localhost:8080/api/product_orders/productOrderStateUpdate", productOrder)
    }

    

}