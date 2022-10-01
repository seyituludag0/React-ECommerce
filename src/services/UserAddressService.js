import axios from "axios";

export default class UserAddressService{

    getByCustomerId(customerId){
        return axios.get(`http://localhost:8080/api/userAddresses/getByCustomerId?customerId=${customerId}`)
    }

    add(address){
        return axios.post("http://localhost:8080/api/userAddresses/add", address)
    }

    update(address){
        return axios.post("http://localhost:8080/api/userAddresses/update", address)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/userAddresses/delete/${id}`)
    }

}