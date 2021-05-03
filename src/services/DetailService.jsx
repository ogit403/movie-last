import { mainService } from "./mainService";

class DetailService extends mainService {

    getTaskDetail = (maPhim) => {
        // console.log(maPhim);
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
        
    }
}

export const detailService = new DetailService();