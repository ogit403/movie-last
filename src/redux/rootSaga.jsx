import * as BuySaga from './MovieSaga/BuySaga';
import * as DetailEventsSaga from './MovieSaga/DetailEventsSaga';
import * as DetailMovieSaga from './MovieSaga/DetailMovieSaga';
import * as DetailSaga from './MovieSaga/DetailSaga';
import * as DetailUserSaga from './MovieSaga/DetailUserSaga';
import * as EventsSaga from './MovieSaga/EventsSaga';
import * as HomeSaga from './MovieSaga/HomeSaga';
// import * as ListDateSaga from './MovieSaga/ListDateSaga';
import * as ListMovieSaga from './MovieSaga/ListMovieSaga';
import * as ReviewSaga from './MovieSaga/ReviewSaga';
import * as TheaterSaga from './MovieSaga/TheaterSaga';
import * as TheaterTheoRapSaga from './MovieSaga/TheaterTheoRapSaga';
import * as DetailReviewSaga from './MovieSaga/DetailReviewSaga';
import * as CommentSaga from './MovieSaga/CommentSaga';
import * as DangKySaga from './MovieSaga/DangKySaga';
import * as LoginSaga from './MovieSaga/LoginSaga'

import * as AdminUserSaga from './MovieSaga/AdminUserSaga';
import * as AdminAddUserSaga from './MovieSaga/AdminAddUserSaga';
import * as AdminMovieSaga from './MovieSaga/AdminMovieSaga';
import * as AdminAddMovieSaga from './MovieSaga/AdminAddMovieSaga';
import * as AdminLichChieuSaga from './MovieSaga/AdminLichChieuSaga';


import {all} from 'redux-saga/effects';

export function * rootSaga() {
    yield all([
        HomeSaga.theoDoigetAPI(),

        ListMovieSaga.theoDoiGetAPIListMovie(),

        DetailSaga.theoDoiGetAPIDetail(),

        TheaterSaga.theoDoigetAPITheater(),

        TheaterTheoRapSaga.theoDoigetAPITheaterTheoRap(),

        ReviewSaga.theoDoiGetAPIReview(),

        EventsSaga.theoDoigetAPIEvent(),

        DetailEventsSaga.theoDoiGetAPIDetailEvents(),

        DetailReviewSaga.theoDoiGetAPIDetailReview(),

        DetailMovieSaga.theoDoiGetAPIDetailMovie(),
        
        CommentSaga.theoDoiGetAPIComment(),
        CommentSaga.theoDoiPutAPIComment(),
        CommentSaga.theoDoiPostAPIComment(),

        BuySaga.theoDoiGetAPIBuy(),
        BuySaga.theoDoiPostAPIBuy(),

        DangKySaga.theoDoiPostAPIDangKy(),

        LoginSaga.theoDoiPostAPILogin(),

        DetailUserSaga.theoDoiGetAPIDetailUser(),
        
        // Admin
        AdminUserSaga.theoDoiGetAPIAdminUSer(),
        AdminUserSaga.theoDoiDeleteAPIAdminUser(),
        AdminUserSaga.theoDoiGetAPIAdminUserTim(),

        AdminAddUserSaga.theoDoiPostAPIAddUser(),
        AdminAddUserSaga.theoDoiUpdateAPIAddUser(),

        AdminMovieSaga.theoDoiGetAPIAdminMovie(),
        AdminMovieSaga.theoDoiDeleteAPIAdminMovie(),

        AdminAddMovieSaga.theoDoiPostAPIAdminAddMovie(),
        AdminAddMovieSaga.theoDoiUpdateAPIAdminAddMovie(),

        AdminLichChieuSaga.theoDoiGetAPILichChieu(),
        AdminLichChieuSaga.theoDoiPostAPIAddLichChieu(),
    ])
}  