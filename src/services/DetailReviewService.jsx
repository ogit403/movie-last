import { mainService } from "./mainService";
import axios from "axios";


class DetailReviewService extends mainService {


    getTaskAPIDetailReview = (id) => {
        return axios({
            url: `https://5fd46f4fe9cda40016f5bf32.mockapi.io/Review/${id}`,
            type: 'GET'
        })
    }
}

export const detailReviewService = new DetailReviewService();