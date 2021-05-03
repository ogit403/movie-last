import {detailUserService} from '../../services/DetailUserService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIDetailUser(action) {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        let items = {taiKhoan: action.params.name}
        const {data} = yield call(() => detailUserService.getTaskAPIDetailUser(items))
  
        yield put({
            type: 'detailUserReducer/GET_API',
            data
        })
    }
    catch(err){
        console.log(err)
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function * theoDoiGetAPIDetailUser() {
    yield takeLatest('GET_API_DETAIL_USER', getAPIDetailUser)
}