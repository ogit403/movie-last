const HomeState = {
    list: [],
}

export const HomeReducer = (state=HomeState, action) => {
    switch(action.type){
        case 'homeReducer/GET_API': {
            return {...state, list: action.data, theater: action.theater};
        }

        default: return {...state}
    }
}