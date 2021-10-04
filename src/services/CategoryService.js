import axios from "axios";

export default class CategoryService{
    getAllCategory(){
        return axios.get("http://localhost:8080/api/categories/getAll");
    }

    add(category){
        return axios.post("http://localhost:8080/api/categories/addDto", category)
    }

    update(category){
        return axios.post("http://localhost:8080/api/categories/updateDto", category)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/categories/delete/${id}`)
    }
}