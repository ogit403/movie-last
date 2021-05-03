import {combineReducers} from 'redux';
//import Home
import {BuyReducer} from './../pages/HomeTemplate/Buy/modules/reducer';
import {DetailReducer} from './../pages/HomeTemplate/Detail/modules/reducer';
import {DetailEventsReducer} from './../pages/HomeTemplate/DetailEvents/modules/reducer';
import {DetailMovieReducer} from './../pages/HomeTemplate/DetailMovie/modules/reducer';
import {DetailUserReducer} from './../pages/HomeTemplate/DetailUser/modules/reducer';
import {EventsReducer} from './../pages/HomeTemplate/Events/modules/reducer';
import {HomeReducer} from './../pages/HomeTemplate/Home/modules/reducer';
import {ListDateReducer} from './../pages/HomeTemplate/ListDate/modules/reducer';
import {ListMovieReducer} from './../pages/HomeTemplate/ListMovie/modules/reducer';
import {ReviewReducer} from './../pages/HomeTemplate/Review/modules/reducer';
import {TheaterReducer} from './TheaterReducer';
import {TheaterTheoRapReducer} from './TheaterTheoRapReducer';
import {DetailReviewReducer} from './DetailReviewReducer';
import {CommentReducer} from './CommentReducer';
import {DangKyReducer} from './DangKyReducer'
import {LoginReducer} from '../pages/HomeTemplate/Login/modules/reducer'
//import Admin
import {AdminUserReducer} from '../pages/AdminTemplate/User/modules/reducer'
import {AdminMovieReducer} from '../pages/AdminTemplate/Movie/modules/reducer'
import {LichChieuReducer} from '../pages/AdminTemplate/LichChieu/modules/reducer'

import {LoadingReducer} from './LoadingReducer'

export const rootReducer = combineReducers({
    //Home
    BuyReducer,
    DetailReducer,
    DetailEventsReducer,
    DetailMovieReducer,
    DetailUserReducer,
    EventsReducer,
    HomeReducer,
    ListDateReducer,
    ListMovieReducer,
    ReviewReducer,
    TheaterReducer,
    TheaterTheoRapReducer,
    DetailReviewReducer,
    CommentReducer,
    DangKyReducer,
    LoginReducer,
    // Admin
    AdminUserReducer,
    AdminMovieReducer,
    LichChieuReducer,

    LoadingReducer,
})