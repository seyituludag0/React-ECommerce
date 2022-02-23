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
        return axios.get("http://localhost:8080/api/customers/getByCustomerId?customerId=" + userId)
    }

    customerUpdate(user){
        return axios.post("http://localhost:8080/api/customers/updateDto", user)
    }

    changePassword(passwordInfo){
        return axios.post("http://localhost:8080/api/users/changePassword", passwordInfo)
    }

    resetPassword(passwordInfo){
        return axios.post("http://localhost:8080/api/users/resetPassword", passwordInfo)
    }

    generateResetPasswordToken(email){
        return axios.post(`http://localhost:8080/api/users/generateResetPasswordToken?email=${email}`)
    }
    
    getByUserIdResetPasswordToken(userId){
        return axios.get("http://localhost:8080/api/resetPasswordTokens/getByUserId?userId=" + userId)
    }

}