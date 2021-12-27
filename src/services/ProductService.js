import axios from "axios";

export default class ProductService {
  getAllProduct() {
    return axios.get("http://localhost:8080/api/products/getAll");
  }

  getProductByCategoryId(categoryId) {
    return axios.get(
      "http://localhost:8080/api/products/getProductByCategoryId?categoryId=" +
        categoryId
    );
  }

  getByProductId(productId) {
    return axios.get("http://localhost:8080/api/products/getByProductId?productId="+ productId);
  }

  filterPrice(max, min) {
    // return axios.post(`http://localhost:8080/api/products/filterPrice?max=${max}&min=${min}`)
    return axios.post(
      "http://localhost:8080/api/products/filterPrice?max=15&min=10"
    );
  }

  getByFilter(values) {
    return axios.post("http://localhost:8080/api/products/getByFilter", values);
  }

  addToCardProduct(cartId, productId) {
    return axios.post(
      `http://localhost:8080/api/products/product/${cartId}/${productId}`
    );
  }

  add(product) {
    return axios.post("http://localhost:8080/api/products/addDto", product);
  }

  update(product) {
    return axios.post("http://localhost:8080/api/products/updateDto", product);
  }

  delete(id) {
    return axios.post(`http://localhost:8080/api/products/delete/${id}`);
  }

  getAllPagination(pageNo) {
    return axios.get(
      "http://localhost:8080/api/products/getAllPagination?pageNo=" + pageNo
    );
  }

  getMainProducts() {
    return axios.get(
      "http://localhost:8080/api/products/getAllPagination?pageNo=2"
    );
  }

  searchKeyword(keyword){
    return axios.get("http://localhost:8080/api/products/searchKeyword?keyword=" + keyword)
  }

}