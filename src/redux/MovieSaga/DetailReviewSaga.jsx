import {detailReviewService} from '../../services/DetailReviewService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIDetailReview(action) {
    
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(() => detailReviewService.getTaskAPIDetailReview(action.params.id));
          
        yield put({
            type: 'detailReviewReducer/GET_API',
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

export function* theoDoiGetAPIDetailReview(){
    yield takeLatest('GET_DETAIL_REVIEW_API', getAPIDetailReview);
}
