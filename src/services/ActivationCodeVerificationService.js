import axios from "axios";

export default class EmailVerificationTemplateService{
    activationCodeVerification(code){
        return axios.post("http://localhost:8080/api/activationCodes/verify?code=" + code)
    }
}