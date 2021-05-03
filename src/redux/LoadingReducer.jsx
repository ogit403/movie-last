const LoadingState = {
	isLoading: false
}

export const LoadingReducer = (state=LoadingState, action) => {
	switch(action.type){
		case 'SHOW_LOADING':{
			return {...state, isLoading: true}
		}
		case 'HIDDEN_LOADING': {
			return {...state, isLoading: false}
		}
		default: return {...state};
	}
}