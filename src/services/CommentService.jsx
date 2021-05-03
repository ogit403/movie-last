import { mainService } from "./mainService";
import axios from "axios";


class CommentService extends mainService {
 
    getTaskAPIComment = () => {
        return axios({
            url: `https://5fd46f4fe9cda40016f5bf32.mockapi.io/api/Rate`,
            method: 'GET'
        })
    }

    putTaskAPIComment = (items) => {
    
        return axios({
            url: `https://5fd46f4fe9cda40016f5bf32.mockapi.io/api/Rate/${items.items.id}`,
            method: 'PUT',
            data: items.items.value
        })
    } 

    postTaskAPIComment = (data) => {

        return axios({
            url: `https://5fd46f4fe9cda40016f5bf32.mockapi.io/api/Rate`,
            method: 'POST',
            data: data
        })
    } 
}

export const commentService = new CommentService();