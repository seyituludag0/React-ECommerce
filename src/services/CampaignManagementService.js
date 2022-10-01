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

    verifyCouponCode(cartId, couponCode){
        return axios.post(`http://localhost:8080/api/campaignManagement/verifyCouponCode?cartId=${cartId}&couponCode=${couponCode}`)
    }

    cancelCouponCode(cartId, couponCode){
        return axios.post(`http://localhost:8080/api/campaignManagement/cancelCouponCode?cartId=${cartId}&couponCode=${couponCode}`)
    }

    getRandomCampaign(){
        return axios.get("http://localhost:8080/api/campaignManagement/getRandomCampaign?limit=1")
    }

    getByCampaignId(campaignId){
        return axios.get(`http://localhost:8080/api/campaignManagement/getByCampaignId?campaignId=${campaignId}`)
    }

    getByCurrentCategoryId(categoryId){
        return axios.get("http://localhost:8080/api/campaignManagement/getByCurrentCategoryId?categoryId=" + categoryId)
    }

    getByCouponCode(couponCode){
        return axios.get("http://localhost:8080/api/campaignManagement/getByCouponCode?couponCode=" + couponCode)
    }

}
