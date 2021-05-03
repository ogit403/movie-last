import {buyService} from '../../services/BuyService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIBuy(action) {
    try{    
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(()=>buyService.getTaskAPIBuy(action.params.id));
        
        yield put({
            type: 'buyReducer/GET_API',
            data
        })
    }
    catch(err){
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function * theoDoiGetAPIBuy(){
    yield takeLatest('GET_API_BUY', getAPIBuy)
}

function * postAPIBuy(action){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {res} = yield call(() => buyService.postTaskAPIBuy(action.data));
        
        yield put({
            type: 'buyReducer/SUCCESS',
            data: res
        })
    }
    catch(err){
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function * theoDoiPostAPIBuy(){
    yield takeLatest('POST_API_DAT_VE', postAPIBuy)
}