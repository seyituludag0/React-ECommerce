import axios from "axios";

export default class SockImageService {
  getBySockId(sockId) {
    return axios.get("http://localhost:8080/api/sockimages/getBySockId?sockId=" + sockId);
  }

  getAllSockImages(){
    return axios.get("http://localhost:8080/api/sockimages/getAll")
  }

  upload(id,file){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto?id=${id}`,file)
  }

  getAllSockImageNull(){
    return axios.get("http://localhost:8080/api/sockimages/getAllSockImageNull")
  }
}