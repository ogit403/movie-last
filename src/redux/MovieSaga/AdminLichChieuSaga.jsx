import { call, put, takeLatest } from '@redux-saga/core/effects';
import {adminLichChieuService} from '../../services/AdminLichChieuService';

function * getAPILichChieu(action) {
	try{
		const {data} = yield call(() => adminLichChieuService.getTaskAPILichChieu(action.data));
		yield put({
			type: 'lichChieuReducer/GET_API',
			data
		})
	}
	catch(err) {
		console.log(err)
	}
}

export function * theoDoiGetAPILichChieu(){
	yield takeLatest('GET_API_LICH_CHIEU', getAPILichChieu)
}

function * postAPIAddLichChieu(action) {
	try{
		yield put({
            type: 'SHOW_LOADING'
        })
		yield call(() => adminLichChieuService.postTaskAPIAddLichChieu(action.data));
		yield put({
            type: 'HIDDEN_LOADING'
        })
	}
	catch(err){
		console.log(err)
	}
}

export function * theoDoiPostAPIAddLichChieu(){
	yield takeLatest('POST_API_ADD_LICH_CHIEU', postAPIAddLichChieu)
}