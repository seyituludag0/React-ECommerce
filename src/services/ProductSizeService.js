import axios from "axios";

export default class ProductSizeService{
    getAll(){
        return axios.get("http://localhost:8080/api/productSizes/getAll");
    }
}