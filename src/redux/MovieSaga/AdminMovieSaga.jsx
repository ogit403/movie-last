import {adminMovieService} from '../../services/AdminMovieService';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { data } from 'jquery';

function* getAPIAdminMovie() {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		const {data} = yield call(adminMovieService.getTaskAPIAdminMovie);

		yield put({
			type: 'adminMovieReducer/GET_API',
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

export function * theoDoiGetAPIAdminMovie() {
	yield takeLatest('GET_API_ADMIN_MOVIE', getAPIAdminMovie)
}

function* deleteAPIAdminMovie(action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		yield call(() => adminMovieService.deleteTaskAPIAdminMovie(action.data))
		yield call(adminMovieService.getTaskAPIAdminMovie);

		yield put({
			type: 'adminMovieReducer/GET_API',
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

export function* theoDoiDeleteAPIAdminMovie() {
	yield takeLatest('DELETE_ADMIN_MOVIE', deleteAPIAdminMovie)
}