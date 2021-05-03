import axios from "axios";
import { mainService } from "./mainService";

class EventsService extends mainService {
 
    getTaskAPIEvent = () => {
        return axios({
            url: 'https://5fd46f4fe9cda40016f5bf32.mockapi.io/Event',
            get: 'GET'
        })
    }
}

export const eventsService = new EventsService();