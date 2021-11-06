import axios from "axios";

export default class SockImageService {

  getAllSockImages(){
    return axios.get("http://localhost:8080/api/sockimages/getAll")
  }

  getBySockId(sockId) {
    return axios.get(`http://localhost:8080/api/sockimages/getBySockId?sockId=${sockId}`);
  }
  
  getAllSockImageNull(){
    return axios.get("http://localhost:8080/api/sockimages/getAllSockImageNull")
  }

  uploadPhoto1(id,file1){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto1?id=${id}`,file1)
  }
  
  uploadPhoto2(id,file2){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto2?id=${id}`,file2)
  }

  
  uploadPhoto3(id,file3){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto3?id=${id}`,file3)
  }

  
  uploadPhoto4(id,file4){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto4?id=${id}`,file4)
  }

  
  uploadPhoto5(id,file5){
    return axios.post(`http://localhost:8080/api/sockimages/uploadPhoto5?id=${id}`,file5)
  }

}