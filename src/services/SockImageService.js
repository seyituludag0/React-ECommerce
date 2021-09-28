import axios from "axios";

export default class SockImageService {
  getBySockId(sockId) {
    return axios.get("http://localhost:8080/api/sockimages/getBySockId?sockId=" + sockId);
  }

  getAllSockImages(){
    return axios.get("http://localhost:8080/api/sockimages/getAll")
  }
}
