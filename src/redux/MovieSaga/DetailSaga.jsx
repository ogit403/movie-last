import {detailService} from '../../services/DetailService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function* getAPIDetail(action) {
    
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(() => detailService.getTaskDetail(action.params.id));
        yield put({
            type: 'detailReducer/GET_API',
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

export function * theoDoiGetAPIDetail(){
    yield takeLatest('GET_API_DETAIL_SAGA', getAPIDetail);
}