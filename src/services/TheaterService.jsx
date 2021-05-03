import { mainService } from "./mainService";

export class TheaterService extends mainService {

    getTaskAPITheater = () => { return this.get('QuanLyRap/LayThongTinHeThongRap')};
}

export const theaterService = new TheaterService();