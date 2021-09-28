import axios from "axios"

export default class BrandService{
    getAllBrands(){
        return axios.get("http://localhost:8080/api/brands/getAll")
    }
}