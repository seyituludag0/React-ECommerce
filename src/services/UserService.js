import axios from "axios"

const API_URL = "http://localhost:8080/api/auth/"

export default class UserService{
    customerRegister(user){
        return axios.post(API_URL + "customer-register", user)
    }

    adminRegister(admin){
        return axios.post(API_URL + "admin-register", admin)
    }

    login(credentials){
        return axios.post(API_URL + "login", credentials)
    }

    getByUserName(userName){
        return axios.get("http://localhost:8080/api/users/getByUserName?userName=" + userName)
    }

    getByUserId(userId){
        return axios.get("http://localhost:8080/api/users/getByUserId?userId=" + userId)
    }
}

