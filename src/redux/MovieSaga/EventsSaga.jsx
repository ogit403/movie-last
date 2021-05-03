import {eventsService} from '../../services/EventsService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIEvent() {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(eventsService.getTaskAPIEvent);
        
        yield put({
            type: 'eventReducer/GET_API',
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

export function* theoDoigetAPIEvent(){
    yield takeLatest('GET_EVENTS_API', getAPIEvent)
}