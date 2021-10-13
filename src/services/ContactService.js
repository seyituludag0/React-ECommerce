import axios from "axios";

export default class ContactService{
    send(contact){
        return axios.post("http://localhost:8080/api/contactForms/send", contact)
    }
}