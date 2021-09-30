import axios from "axios"

const API_URL = "http://localhost:8080/api/auth/"

export default class UserService{
    register(user){
        return axios.post(API_URL + "customer-register", user)
    }

    login(credentials){
        return axios.post(API_URL + "login", credentials)
    }
}