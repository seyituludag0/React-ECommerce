import axios from "axios";

export default class VariantOptionService{

    getProductSizeByProductId(productId){
        return axios.get(`http://localhost:8080/api/variantOptions/getProductSizeByProductId?productId=${productId}`)
    }
    
    getProductColorByProductId(productId){
        return axios.get(`http://localhost:8080/api/variantOptions/getProductColorByProductId?productId=${productId}`)
    }

    getByProductIdAndColorId(colorId, productId){
        return axios.get(`http://localhost:8080/api/variantOptions/getByProductIdAndColorId?colorId=${colorId}&productId=${productId}`)
    }

    getVariantId(colorId, productId){
        return axios.get(`http://localhost:8080/api/variantOptions/getByProductIdAndColorId?colorId=${colorId}&productId=${productId}`)
    }
    // http://localhost:8080/api/variantOptions/getByProductIdAndColorId?colorId=15&productId=7
}
