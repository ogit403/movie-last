import {commentService} from '../../services/CommentService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIComment(){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data} = yield call(commentService.getTaskAPIComment);
        
        yield put({
            type: 'commentReducer/GET_API',
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

export function * theoDoiGetAPIComment(){
    yield takeLatest('GET_API_COMMENT', getAPIComment)
}

function * putAPIComment(action){ 
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        yield call(() => commentService.putTaskAPIComment(action));
        const {data} = yield call(commentService.getTaskAPIComment);
        
        yield put({
            type: 'commentReducer/GET_API',
            data
        })
    }
    catch(err) {
        console.log(err)
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function * theoDoiPutAPIComment(){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        yield takeLatest('PUT_API_COMMENT', putAPIComment)
        const {data} = yield call(commentService.getTaskAPIComment);
        
        yield put({
            type: 'commentReducer/GET_API',
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

function * postAPIComment(action){ 
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        yield call(() => commentService.postTaskAPIComment(action.data));
        const {data} = yield call(commentService.getTaskAPIComment);
        
        yield put({
            type: 'commentReducer/GET_API',
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

export function * theoDoiPostAPIComment(){
    yield takeLatest('POST_API_COMMENT', postAPIComment)
}