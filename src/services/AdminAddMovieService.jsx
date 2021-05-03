import axios from "axios";


class AdminAddMovieService {

	postTaskAPIAddImage = (data) => {
		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
			method: 'POST',
			data,
		})
		.then(res1 => ({res1}))
		.catch(err1 => ({err1}))
	}

	updateTaskAPIAddImage = (data) => {

		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim',
			method: 'POST',
			data,
		})
		.then(res1 => ({res1}))
		.catch(err1 => ({err1}))
	}

	

	postTaskAPIAddMovie = (data) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }

		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
			method: 'POST',
			data,
			headers:{
                Authorization: `Bearer ${accessToken}`,
            }
		})
		.then(res => ({res}))
		.catch(err => ({err}))
	}

	updateTaskAPIAddMovie = (data) => {
		let accessToken = "";
        if(localStorage.getItem("QuanTri")){
            accessToken = JSON.parse(localStorage.getItem("QuanTri")).accessToken;
        }

		return axios({
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
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

export const adminAddMovieService = new AdminAddMovieService();