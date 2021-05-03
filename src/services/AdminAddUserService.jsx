import axios from "axios";

class AdminAddUserService {
	postTaskAPIAddUser = (items) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }
		// console.log('service',items);
        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method: 'POST',
            data: items,
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
	}

    updateTaskAPIAddUser = (data) => {
        let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }

        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            method: 'PUT',
            data,
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
    }
}

export const adminAddUserService = new AdminAddUserService();