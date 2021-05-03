const DetailState = {
    detail: {}
}

export const DetailReducer = (state=DetailState, action) => {
    switch(action.type){
        case 'detailReducer/GET_API': {
            return {...state, detail: action.data};
        }
        default: return {...state}
    }
}