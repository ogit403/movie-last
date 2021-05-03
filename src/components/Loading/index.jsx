import React from 'react'
import { useSelector } from 'react-redux';
import '../../assets/scss/sass/Layouts/_loading.scss';

export default function Loading(){

	const isLoading = useSelector(state => state.LoadingReducer.isLoading);

	if(isLoading){
		return (
			<div className="bgLoading">
				<img src="./img/loading/loading.gif!w340" alt=""/>
			</div>
		)
	}
	else return '';
	
}