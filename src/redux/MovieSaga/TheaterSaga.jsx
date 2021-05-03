import { call, delay, put, takeLatest } from '@redux-saga/core/effects';
import {theaterService} from '../../services/TheaterService';

function * getAPITheater() {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        yield delay(500);
         let {data, status} = yield call(theaterService.getTaskAPITheater);
        if(status === 200){
            yield put({
                type: 'theaterReducer/GET_API',
                data,
            })
        }
         
    }
    catch(err) {
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function* theoDoigetAPITheater(){
    yield takeLatest('GET_API_THEATER_SAGA', getAPITheater)
}