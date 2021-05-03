const LichChieuState = {
	list: {}
}

export const LichChieuReducer = (state=LichChieuState, action) => {
	switch(action.type){
		case 'lichChieuReducer/GET_API': {
			return {...state, list: action.data}
		}
		default: return {...state};
	}
}