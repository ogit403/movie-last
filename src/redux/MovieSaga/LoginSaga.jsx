import { call,put, takeLatest } from '@redux-saga/core/effects';
import {loginService} from './../../services/LoginSaga';

function* postAPILogin(action){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {res, err} = yield call(() => loginService.postTaskAPILogin(action.data));
        if(res) {
            yield put({
                type: 'loginReducer/SUCCESS',
                data: res.data
            })
            if(res.data.maLoaiNguoiDung === "KhachHang")
                localStorage.setItem("KhachHang", JSON.stringify(res.data))
            else if(res.data.maLoaiNguoiDung === "QuanTri")
                localStorage.setItem("QuanTri", JSON.stringify(res.data))

            action.history.push("/");
        }
        else {
            yield put({
                type: 'loginReducer/FAILED',
                data: err.response
            })
        }
    }
    catch(err){
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function* theoDoiPostAPILogin(){
    yield takeLatest('POST_API_LOGIN', postAPILogin)
}