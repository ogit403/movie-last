const DetailEventsState = {
    detailEvents: {}
}

export const DetailEventsReducer = (state=DetailEventsState, action) => {
    switch(action.type){
        case 'detailEventReducer/GET_API': {
            return{...state, detailEvents: action.data}
        }
        default: return {...state}
    }
}