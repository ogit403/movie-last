const AdminUserState = {
	list: []
}

export const AdminUserReducer = (state=AdminUserState, action) => {
	switch(action.type){
		case 'adminUserReducer/GET_API': {
			return {...state, list: action.data}
		}
		default: return {...state};
	}
}