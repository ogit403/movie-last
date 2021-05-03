import axios from "axios"

class AdminMovieService {

	getTaskAPIAdminMovie = () => {
		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10',
			method: 'GET'
		})
	}

	deleteTaskAPIAdminMovie = (id) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }
		// console.log('abcc');
        return axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
            method: 'DELETE',
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then(res => ({res}))
        .catch(err => ({err}))
	}
}

export const adminMovieService = new AdminMovieService();