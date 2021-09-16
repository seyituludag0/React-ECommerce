import axios from "axios";

export default class CategoryService{
    getAllCategory(){
        return axios.get("http://localhost:8080/api/categories/getAll");
    }
}