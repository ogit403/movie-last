import axios from "axios";
import { mainService } from "./mainService";

class ReviewService extends mainService {


    getTaskAPIReview = () => {
        return axios({
            url: 'https://5fd46f4fe9cda40016f5bf32.mockapi.io/Review',
            type: 'GET'
        })
    }
}

export const reviewService = new ReviewService();