import axios from "axios"

export default class FavoriteService{
    getFavorites() {
        return axios.get("http://localhost:8080/api/favorites/getAll");
      }
      
      getByCustomerIdAndSockId(customerId, sockId){
        return axios.get(`http://localhost:8080/api/favorites/getByCustomerIdAndSockId?customerId=${customerId}&sockId=${sockId}`)
      }
    
      addFavorites(customerId, sockId) {
        return axios.post(`http://localhost:8080/api/favorites/add?customerId=${customerId}&sockId=${sockId}`);
      }
      
      removeFromFavorites(customerId, sockId){
        return axios.post(`http://localhost:8080/api/favorites/delete?customerId=${customerId}&sockId=${sockId}`)
      }
    
      getBycustomerIdFavorites(customerId){
        return axios.get("http://localhost:8080/api/favorites/getByCustomerId?customerId=" + customerId)
      }

      existsByCustomerIdAndSockId(customerId, sockId){
        return axios.get(`http://localhost:8080/api/favorites/existsByCustomerIdAndSockId?customerId=${customerId}&sockId=${sockId}`)
      }
}