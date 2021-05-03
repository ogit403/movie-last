import AddMovieAdmin from "../pages/AdminTemplate/AddMovie/AddMovieAdmin";
import AddUserAdmin from "../pages/AdminTemplate/AddUser/AddUserAdmin";
import InfoUserAdmin from "../pages/AdminTemplate/InfoUser/InfoUserAdmin";
import LichChieuAdmin from "../pages/AdminTemplate/LichChieu/LichChieuAdmin";
import MovieAdmin from "../pages/AdminTemplate/Movie/MovieAdmin";
import UserAdmin from "../pages/AdminTemplate/User/UserAdmin";
import BuyHome from "../pages/HomeTemplate/Buy/BuyHome";
import DetailHome from "../pages/HomeTemplate/Detail/DetailHome";
import DetailEventsHome from "../pages/HomeTemplate/DetailEvents/DetailEventsHome";
import DetailMovieHome from "../pages/HomeTemplate/DetailMovie/DetailMovieHome";
import DetailReviewHome from "../pages/HomeTemplate/DetailReview/DetailReviewHome";
import DetailUserHome from "../pages/HomeTemplate/DetailUser/DetailUserHome";
import EventsHome from "../pages/HomeTemplate/Events/EventsHome";
import Home from "../pages/HomeTemplate/Home/Home";
import ListDateHome from "../pages/HomeTemplate/ListDate/ListDateHome";
import ListMovieHome from "../pages/HomeTemplate/ListMovie/ListMovieHome";
import LoginHome from "../pages/HomeTemplate/Login/LoginHome";
import RegistHome from "../pages/HomeTemplate/Regist/RegistHome";
import ReviewHome from "../pages/HomeTemplate/Review/ReviewHome";

const routeHome = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/sign-up',
        component: RegistHome,
        exact: false
    },
    {
        path: '/review/:page',
        component: ReviewHome,
        exact: false,
    },
    {
        path: '/event',
        component: EventsHome,
        exact: true,
    },
    {
        path: "/list-movie/:id",
        component: DetailHome,
        exact: false,
    },
    {
        path: '/event/:page',
        component: EventsHome,
        exact: false
    },
    {
        path: '/detail-event/:id',
        component: DetailEventsHome,
        exact: false,
    },
    {
        path: '/detail-review/:id',
        component: DetailReviewHome,
        exact: false
    },
    {
        path: '/list-movie',
        component: ListMovieHome,
        exact: true,
    },
    {
        path: '/detail-cinema/:name',
        component: DetailMovieHome,
        exact: false,
    },
    {
        path: '/list-date',
        component: ListDateHome,
        exact: true,
    },
    {
        path: '/detail-user/:name',
        component: DetailUserHome,
        exact: false,
    },
    {
        path: '/buy/:id',
        component: BuyHome,
        exact: false,
    },
    {
        path: '/login',
        component: LoginHome,
        exact: false
    }
]

const routeAdmin = [
    {
        path: '/movie',
        component: MovieAdmin,
        exact: true,
    },
    {
        path: '/movie/:page',
        component: MovieAdmin,
        exact: true,
    },
    {
        path: '/user',
        component: UserAdmin,
        exact: true,
    },
    {
        path: '/user/:page',
        component: UserAdmin,
        exact: true,
    },
    {
        path: '/add-user',
        component: AddUserAdmin,
        exact: true
    },
    {
        path: '/add-user/:taiKhoan?/:matKhau?/:hoTen?/:email?/:soDT?/:maLoaiNguoiDung?',
        component: AddUserAdmin,
        exact: true,
    },
    {
        path: '/add-movie',
        component: AddMovieAdmin,
        exact: true,
    },
    {
        path: '/add-movie/:maPhim?/:tenPhim?/:trailer?/:ngayKhoiChieu?/:danhGia?/:hinhAnh?/:moTa?',
        component: AddMovieAdmin,
        exact: false,
    },
    {
        path: '/info-user',
        component: InfoUserAdmin,
        exact: false,
    },
    {
        path: '/lich-chieu/:id',
        component: LichChieuAdmin,
        exact: true
    },
    {
        path: '/lich-chieu/:id/:page',
        component: LichChieuAdmin,
        exact: true
    }
]

export {routeHome, routeAdmin};

