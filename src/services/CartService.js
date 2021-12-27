import axios from "axios";

export default class CartService{
    addProduct(product){
        return axios.post("http://localhost:8080/api/AddToCart/addProduct", product)
    }

    getCartsByUserId(userId){
        return axios.get("http://localhost:8080/api/addToCart/getCartByUserId?userId=" + userId)
    }

    deleteAllCartByUserId(userId){
        return axios.post("http://localhost:8080/api/addToCart/deleteAllCartByUserId?userId=" + userId)
    }

    deleteProductFromCart(productId){
        return axios.post("http://localhost:8080/api/addToCart/deleteProductFromCart?productId=" + productId)
    }

}

