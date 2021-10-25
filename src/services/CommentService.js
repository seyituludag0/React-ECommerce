import axios from "axios";

export default class CommentService{

    addComment(values){
        return axios.post("http://localhost:8080/api/comments/add", values)
    }

    getBySockId(sockId){
        return axios.get("http://localhost:8080/api/comments/getBySockId?sockId=" + sockId)
    }

}