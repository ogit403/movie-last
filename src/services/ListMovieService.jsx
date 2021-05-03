import { mainService } from "./mainService";

class ListMovieService extends mainService {

    getTaskAPIListMovie = () => {return this.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP15')}
}

export const listMovieService = new ListMovieService();