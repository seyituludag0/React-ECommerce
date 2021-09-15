import axios from "axios";

export default class SockService {
    getAllSock(){
        return axios.get("http://localhost:8080/api/socks/getAll")
    }
}