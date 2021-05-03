import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import LichChieu from '../../../components/AdminTemplate/LichChieu'

export default function LichChieuAdmin(){
	
	const dispatch = useDispatch();
	const params = useParams();
	
	useEffect(() => {
		dispatch({
			type: 'GET_API_LICH_CHIEU',
			data: params.id
		})
	}, [dispatch, params.id])

	return (
		<LichChieu/>
	)
}
