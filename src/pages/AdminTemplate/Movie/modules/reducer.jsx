const AdminMovieState = {
	list: []
}

export const AdminMovieReducer = (state=AdminMovieState, action) => {
	switch(action.type){
		case 'adminMovieReducer/GET_API': {
			return {...state, list: action.data}
		}
		default: return {...state};
	}
}