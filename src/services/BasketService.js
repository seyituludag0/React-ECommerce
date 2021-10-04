import axios from "axios";

export default class BasketService{
    getByUserId(userId){
        return axios.get("http://localhost:8080/api/baskets/getByUserId?userId=" + userId);
    }

    add(values){
        return axios.post("http://localhost:8080/api/baskets/add", values)
    }
}