const TheaterState = {
    theater: []
}

export const TheaterReducer = (state=TheaterState, action) => {
    switch(action.type){
        case 'theaterReducer/GET_API': {
            
            return {...state, theater: action.data};
        }
        default: return{...state};
    }
}