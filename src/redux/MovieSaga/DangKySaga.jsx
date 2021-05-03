import { call, put, takeLatest } from '@redux-saga/core/effects';
// import axios from 'axios';
import {dangKyService} from '../../services/DangKyService';

function * postAPIDangKy(action, history){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {res, err} = yield call(() => dangKyService.postTaskAPIDangKy(action.data));
        if(res){
            action.history.push('/login')
            yield put({
                type: 'dangKyReducer/POST_API',
                data: ''
            })
        }
        else {
            yield put({
                type: 'dangKyReducer/POST_API',
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

export function * theoDoiPostAPIDangKy() {
    yield takeLatest('POST_DANG_KY', postAPIDangKy)
}