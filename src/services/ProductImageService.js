import axios from "axios";

export default class ProductImageService {

  getAllProductImages(){
    return axios.get("http://localhost:8080/api/productimages/getAll")
  }

  getByProductId(productId) {
 // return axios.get(`http://localhost:8080/api/productimages/getByProductId?productId=${productId}`);
    return axios.get("http://localhost:8080/api/productimages/getByProductId?productId=" + productId)
  }
  
  getAllProductImageNull(){
    return axios.get("http://localhost:8080/api/productimages/getAllProductImageNull")
  }

  uploadPhoto1(id,file1){
    return axios.post(`http://localhost:8080/api/productimages/uploadPhoto1?id=${id}`,file1)
  }
  
  uploadPhoto2(id,file2){
    return axios.post(`http://localhost:8080/api/productimages/uploadPhoto2?id=${id}`,file2)
  }

  
  uploadPhoto3(id,file3){
    return axios.post(`http://localhost:8080/api/productimages/uploadPhoto3?id=${id}`,file3)
  }

  
  uploadPhoto4(id,file4){
    return axios.post(`http://localhost:8080/api/productimages/uploadPhoto4?id=${id}`,file4)
  }

  
  uploadPhoto5(id,file5){
    return axios.post(`http://localhost:8080/api/productimages/uploadPhoto5?id=${id}`,file5)
  }

}