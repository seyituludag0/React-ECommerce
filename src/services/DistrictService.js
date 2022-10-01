import axios from "axios";

export default class DistrictService{
    getDistrictsWithCityId(cityId){
        return axios.get("http://localhost:8080/api/districts/getDistrictsWithCityId?cityId="+cityId)
    }
}

