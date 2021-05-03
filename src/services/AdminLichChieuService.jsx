import axios from "axios";

class AdminLichChieuService {
	getTaskAPILichChieu = (id) => {
		return axios({
			url : `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
			method: 'GET'
		})
	}

	postTaskAPIAddLichChieu = (data) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }

		return axios({
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
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

export const adminLichChieuService = new AdminLichChieuService();