import { mainService } from "./mainService";
import axios from "axios";


class DangKyService extends mainService {

    postTaskAPIDangKy = (data) => {
        return axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export const dangKyService = new DangKyService();