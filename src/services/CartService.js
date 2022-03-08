import axios from "axios";
// http://localhost:8080/api/addToCart/addProductToCart

export default class CartService{
    // addProduct(product){
    //     return axios.post("http://localhost:8080/api/addToCart/addProduct", product)
    // }

    addToCart(product){
        return axios.post("http://localhost:8080/api/addToCart/addProductToCart", product)
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

    getCartIdWithUserIdAndProductId(productId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/getCartIdWithUserIdAndProductId?productId=${productId}&userId=${userId}`);
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

    deleteCartById(cartId){
        return axios.post("http://localhost:8080/api/addToCart/deleteCartById?cartId=" + cartId);
    }

    getProductInTheFromCart(productColorId, productId, productSizeId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/getProductInTheFromCart?productColorId=${productColorId}&productId=${productId}&productSizeId=${productSizeId}&userId=${userId}`)
    }

    getCartIdWithProductAndUserIdAndProductSizeIdAndProductColorId(productColorId, productId, productSizeId, userId){
        return axios.get(`http://localhost:8080/api/addToCart/getCartIdWithProductAndUserIdAndProductSizeIdAndProductColorId?productColorId=${productColorId}&productId=${productId}&productSizeId=${productSizeId}&userId=${userId}`)
    }
    
}

