const BuyState = {
    buy: [],
    status: ''
}

export const BuyReducer = (state=BuyState, action) => {
    switch(action.type){
        case 'buyReducer/GET_API': {
            return {...state, buy: action.data}
        }
        case 'buyReducer/SUCCESS': {
            return {...state, status:action.data.status}
        }
        default: return {...state}
    }
}