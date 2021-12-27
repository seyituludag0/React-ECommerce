import axios from "axios"

export default class FavoriteService{
    getFavorites() {
        return axios.get("http://localhost:8080/api/favorites/getAll");
      }
      
      getByCustomerIdAndProductId(customerId, productId){
        return axios.get(`http://localhost:8080/api/favorites/getByCustomerIdAndProductId?customerId=${customerId}&productId=${productId}`)
      }
    
      addFavorites(customerId, productId) {
        return axios.post(`http://localhost:8080/api/favorites/add?customerId=${customerId}&productId=${productId}`);
      }
      
      removeFromFavorites(customerId, productId){
        return axios.post(`http://localhost:8080/api/favorites/delete?customerId=${customerId}&productId=${productId}`)
      }
    
      getBycustomerIdFavorites(customerId){
        return axios.get("http://localhost:8080/api/favorites/getByCustomerId?customerId=" + customerId)
      }

      existsByCustomerIdAndProductId(customerId, productId){
        return axios.get(`http://localhost:8080/api/favorites/existsByCustomerIdAndProductId?customerId=${customerId}&productId=${productId}`)
      }
}