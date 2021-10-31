import axios from "axios";

export default class CartService{
    addSock(sock){
        return axios.post("http://localhost:8080/api/AddToCart/addSock", sock)
    }

    getCartsByUserId(){
        return axios.get("http://localhost:8080/api/addToCart/getCartsByUserId?userId=106")
    }

}
