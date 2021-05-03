import { call, takeLatest, put } from '@redux-saga/core/effects';
import {detailMovieService} from '../../services/DetailMovieService';

function* getAPIDetailMovie(action){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(() => detailMovieService.getTaskAPIDetailMovie(action.params.name));
        yield put({
            type: 'detailMovieReducer/GET_API',
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

export function* theoDoiGetAPIDetailMovie(){
    yield takeLatest('GET_API_DETAIL_MOVIE', getAPIDetailMovie)
}