import axios from "axios";
import { mainService } from "./mainService";

class BuyService extends mainService{

    getTaskAPIBuy = (id) => {return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)}

    postTaskAPIBuy = (data) =>{
        let accessToken = "";
        if(localStorage.getItem("KhachHang")){
            accessToken = JSON.parse(localStorage.getItem("KhachHang")).accessToken;
        }
        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            method: 'POST',
            data,
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export const buyService = new BuyService();