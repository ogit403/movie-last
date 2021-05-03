import axios from "axios";

class AdminAddLichChieuService {
	postTaskAPIAddLichChieu = (data) => {
		return axios({
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
			method: 'POST',
			data
		})
		.then(res => ({res}))
		.catch(err => ({err}))
	}
}

export const adminAddLichChieuService = new AdminAddLichChieuService();