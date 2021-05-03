import {adminAddLichChieuService} from '../../services/AdminAddLichChieuService';
import { call, put, takeLatest } from '@redux-saga/core/effects';

function * postAPIAddLichChieu(action) {
	try{

		yield put({
            type: 'SHOW_LOADING'
        })

		const {res, err} = yield call(() => adminAddLichChieuService.postTaskAPIAddLichChieu(action.data));
	}
	catch(err){
		console.log(err)
	}
	yield put({
		type: 'HIDDEN_LOADING'
	})
}

export function * theoDoiPostAPIAddLichChieu(){
	yield takeLatest('POST_API_ADD_LICH_CHIEU', postAPIAddLichChieu)
}