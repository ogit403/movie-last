import { call, put, takeLatest } from '@redux-saga/core/effects';
import {adminAddMovieService} from '../../services/AdminAddMovieService';

function * postAPIAdminAddMovie(action){
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		const {res} = yield call(() => adminAddMovieService.postTaskAPIAddMovie(action.data1));
		if(res) {
			yield call(() => adminAddMovieService.postTaskAPIAddImage(action.data2));
		}
	}
	catch(err){
		console.log(err);
	}
	yield put({
		type: 'HIDDEN_LOADING'
	})
}

export function * theoDoiPostAPIAdminAddMovie(){
	yield takeLatest('POST_API_ADMIN_ADD_MOVIE', postAPIAdminAddMovie);
}

function * updateAPIAdminAddMovie(action){
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		const {res} = yield call(() => adminAddMovieService.updateTaskAPIAddMovie(action.data1));
		if(res.status === 200){
			yield call(() => adminAddMovieService.updateTaskAPIAddImage(action.data2));
		}

		yield put({
            type: 'HIDDEN_LOADING'
        })
	}
	catch(err){
		console.log(err)
	}
}

export function * theoDoiUpdateAPIAdminAddMovie() {
	yield takeLatest('UPDATE_API_ADMIN_ADD_MOVIE', updateAPIAdminAddMovie)
}