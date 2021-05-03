import {adminUserService} from '../../services/AdminUserService';
import { call, put, takeLatest } from '@redux-saga/core/effects';


function* getAPIAdminUser() {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		const {data} = yield call(adminUserService.getTaskAPIAdminUser);

		yield put({
			type: 'adminUserReducer/GET_API',
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

export function * theoDoiGetAPIAdminUSer() {
	yield takeLatest('GET_API_ADMIN_USER', getAPIAdminUser)
}

function* getAPIAdminUserTim (action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
			const {data} = yield call(() => adminUserService.getTaskAPIAdminUserTim(action.data));

		yield put({
			type: 'adminUserReducer/GET_API',
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

export function * theoDoiGetAPIAdminUserTim() {
	yield takeLatest('GET_API_ADMIN_USER_TIM', getAPIAdminUserTim)
}

function* deleteAPIAdminUser(action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		yield call(() => adminUserService.deleteTaskAPIAdminUser(action.data))
		const {data} = yield call(adminUserService.getTaskAPIAdminUser);

		yield put({
			type: 'adminUserReducer/GET_API',
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

export function* theoDoiDeleteAPIAdminUser() {
	yield takeLatest('DELETE_ADMIN_USER', deleteAPIAdminUser)
}