import axios from "axios"

export default class CampaignManagementService{
    getAll(){
        return axios.get("http://localhost:8080/api/campaignManagement/getAll")
    }

    create(campaign){
        return axios.post("http://localhost:8080/api/campaignManagement/createCampaign", campaign)
    }

    update(campaign){
        return axios.post("http://localhost:8080/api/campaignManagement/update", campaign)
    }

    delete(id){
        return axios.post(`http://localhost:8080/api/campaignManagement/delete/${id}`)
    }

    verifyCouponCode(couponCode){
        return axios.post(`http://localhost:8080/api/campaignManagement/verifyCouponCode?couponCode=${couponCode}`)
    }

    getRandomCampaign(){
        return axios.get("http://localhost:8080/api/campaignManagement/getRandomCampaign?limit=1")
    }

}
