import axios from "axios";

export default class ColorService{
    getAllColor(){
        return axios.get("http://localhost:8080/api/colors/getAll")
    }
}