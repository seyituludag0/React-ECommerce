import axios from "axios";

export default class CartService{
    addProduct(product){
        return axios.post("http://localhost:8080/api/addToCart/addProduct", product)
    }

    getCartsByUserId(userId){
        return axios.get(`http://localhost:8080/api/addToCart/getCartByUserId?userId=${userId}`)
    }

    deleteAllCartByUserId(userId){
        return axios.post("http://localhost:8080/api/addToCart/deleteAllCartByUserId?userId=" + userId)
    }

    // deleteProductFromCart(productId){
    //     return axios.post("http://localhost:8080/api/addToCart/deleteProductFromCart?productId=" + productId)
    // }

    deleteProductFromCart(cartId, productId, userId){
        return axios.post(`http://localhost:8080/api/addToCart/deleteProductFromCart?cartId=${cartId}&productId=${productId}&userId=${userId}`)
    }

    removeProductFromCart(productId, userId){
        return axios.post(`http://localhost:8080/api/addToCart/removeProductFromCart?productId=${productId}&userId=${userId}`)
    }

    existsByProductId(productId){
        return axios.get(`http://localhost:8080/api/addToCart/existsByProductId?productId=${productId}`)
    }

    updateQuantityForCart(product){
        return axios.post("http://localhost:8080/api/addToCart/updateQuantityForCart", product)
    }

    userIdGetCartId(productId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/userIdGetCartId?productId=${productId}&userId=${userId}`);
    }

    existsByUserIdAndProductId(productId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/existsByUserIdAndProductId?productId=${productId}&userId=${userId}`)
    }

    getCartByUserIdAndProductId(productId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/getCartByUserIdAndProductId?productId=${productId}&userId=${userId}`)
    }

    applyDiscountedPrice(cartId, discountRate){
        return axios.post(`http://localhost:8080/api/addToCart/applyDiscountedPrice?cartId=${cartId}&discountRate=${discountRate}`);
    }
    
}

