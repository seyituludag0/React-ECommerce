import axios from "axios"

export default class BrandService{
    getAllBrands(){
        return axios.get("http://localhost:8080/api/brands/getAll")
    }

    add(brand){
        return axios.post("http://localhost:8080/api/brands/addDto", brand)
    }

    update(brand){
        return axios.post("http://localhost:8080/api/brands/updateDto", brand)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/brands/delete/${id}`)
    }
}