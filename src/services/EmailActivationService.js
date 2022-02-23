import axios from "axios";

export default class EmailActivationService {
  // http://localhost:8080/api/auth/verify?verificationCode=uJfrh5e2CKjfhw7zNMKcjzjdVE2YYKHoIKmxvKn6bu8cjjxuOyOfpzjnEj3JiBLI

  verificationAccount(activationToken) {
      return axios.post(`http://localhost:8080/api/auth/verify?verificationCode=${activationToken}`)
  }
}
