import axios from "axios"


class AdminUserService {

	getTaskAPIAdminUser = () => {
		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP14',
			method: 'GET'
		})
	}

    getTaskAPIAdminUserTim = (id) => {
        return axios({
			url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP05&tuKhoa=${id}`,
			method: 'GET'
		})
    }

	deleteTaskAPIAdminUser = (id) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }
		console.log('abcc');
        return axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
            method: 'DELETE',
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
	}
}

export const adminUserService = new AdminUserService();