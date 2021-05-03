import axios from "axios";

class DetailUserService {
  
    getTaskAPIDetailUser = (data) => {
        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: 'POST',
            data
        })
    }
}

export const detailUserService = new DetailUserService();