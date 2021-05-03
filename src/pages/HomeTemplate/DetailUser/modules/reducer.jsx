const DetailUserState = {
    detailUser: {}
}

export const DetailUserReducer = (state=DetailUserState, action) => {
    switch(action.type){
        case 'detailUserReducer/GET_API': {
            return {...state, detailUser: action.data}
        }
        default: return {...state}
    }
}