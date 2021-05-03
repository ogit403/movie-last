import { call, put, takeLatest } from '@redux-saga/core/effects';
import {adminAddUserService} from '../../services/AdminAddUserService';

function * postAPIAddUser(action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		yield call(() => adminAddUserService.postTaskAPIAddUser(action.data));
		yield put({
            type: 'HIDDEN_LOADING'
        })
	}
	catch(err) {
		console.log(err)
	}
}

export function * theoDoiPostAPIAddUser(){
	yield takeLatest('POST_API_ADD_USER', postAPIAddUser)
}

function * updateAPIAddUser(action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		yield call(() => adminAddUserService.updateTaskAPIAddUser(action.data));
		yield put({
            type: 'HIDDEN_LOADING'
        })
	}
	catch(err){
		console.log(err)
	}
}

export function * theoDoiUpdateAPIAddUser(){
	yield takeLatest('UPDATE_API_ADD_USER', updateAPIAddUser)
}