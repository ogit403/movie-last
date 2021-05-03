import { mainService } from "./mainService";

export class HomeService extends mainService {

    getTaskAPI = () => { return this.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP07')};
}

export const homeService = new HomeService();