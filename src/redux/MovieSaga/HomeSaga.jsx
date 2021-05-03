import { call, put, takeLatest } from '@redux-saga/core/effects';
import {homeService} from '../../services/HomeService';

function * getAPI() {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })

         let {data} = yield call(homeService.getTaskAPI);
        yield put({
            type: 'homeReducer/GET_API',
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

export function* theoDoigetAPI(){
    yield takeLatest('GET_API_HOME_SAGA', getAPI)
}