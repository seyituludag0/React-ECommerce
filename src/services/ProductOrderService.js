import axios from "axios";

export default class ProductOrderService{
    
    getAll(){
        return axios.get("http://localhost:8080/api/product_orders/getAll")
    }

    getProductOrderByUserId(userId){
        return axios.get("http://localhost:8080/api/product_orders/getProductOrderByUserId?userId=" + userId)
    }

    getProductOrderByOrderNumber(orderNumber){
        return axios.get("http://localhost:8080/api/product_orders/getProductOrderByOrderNumber?orderNumber=" + orderNumber)
    }

    productOrder(productOrder){
        return axios.post("http://localhost:8080/api/product_orders/productOrder", productOrder)
    }

    existsByUserIdAndProductId(productId, userId){
        return axios.get(`http://localhost:8080/api/product_orders/existsByUserIdAndProductId?productId=${productId}&userId=${userId}`)
    }

    expectedOrders(){
        return axios.get("http://localhost:8080/api/product_orders/expectedOrders")
    }

}

