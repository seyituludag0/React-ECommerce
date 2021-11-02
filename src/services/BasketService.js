import axios from "axios";

export default class BasketService{
    getByUserId(){
        return axios.get("http://localhost:8080/api/baskets/getByUserId?userId=106");
    }

    // add(values){
    //     return axios.post("http://localhost:8080/api/baskets/add", values)
    // }

    // update(values){
    //     return axios.post("http://localhost:8080/api/baskets/update", values)
    // }
}