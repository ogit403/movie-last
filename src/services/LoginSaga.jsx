import axios from "axios";
import { mainService } from "./mainService";

class LoginService extends mainService {
    postTaskAPILogin = (data) => {
        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: 'POST',
            data
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export const loginService = new LoginService();