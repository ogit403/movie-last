import { mainService } from "./mainService";
import axios from "axios";


class DetailEventsService extends mainService {

    getTaskAPIDetailEvents = (id) => {
        return axios({
            url: `https://5fd46f4fe9cda40016f5bf32.mockapi.io/Event/${id}`,
            type: 'GET'
        })
    }
}

export const detailEventsService = new DetailEventsService();