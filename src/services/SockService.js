import axios from "axios";

export default class SockService {
    getAllSock(){
        return axios.get("http://localhost:8080/api/socks/getAll")
    }
    
    getSockByCategoryId(categoryId) {
        return axios.get("http://localhost:8080/api/socks/getSockByCategoryId?categoryId=" + categoryId)
    }

    getBySockId(sockId){
        return axios.get("http://localhost:8080/api/socks/getBySockId?sockId=" + sockId)
    }

    filterPrice(max, min){
        // return axios.post(`http://localhost:8080/api/socks/filterPrice?max=${max}&min=${min}`)
        return axios.post("http://localhost:8080/api/socks/filterPrice?max=15&min=10")
    }

    getByFilter(values){
        return axios.post("http://localhost:8080/api/socks/getByFilter", values)
    }


}

