import { call, put, takeLatest } from '@redux-saga/core/effects';
import {theaterTheoRapService} from '../../services/TheaterTheoRapService';

function * getAPITheaterTheoRap(action) {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
         let {data} = yield call(theaterTheoRapService.getTaskAPITheaterTheoRap);
        yield put({
            type: 'theaterTheoRapReducer/GET_API',
            data,
        })
    }
    catch(err) {
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function* theoDoigetAPITheaterTheoRap(){
    yield takeLatest('GET_API_THEATERTHEORAP_SAGA', getAPITheaterTheoRap)
}