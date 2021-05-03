import { mainService } from "./mainService";

export class TheaterTheoRapService extends mainService {

    getTaskAPITheaterTheoRap = () => { return this.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03')};
}

export const theaterTheoRapService = new TheaterTheoRapService();