const TheaterTheoRapState = {
    arrTheoRap: []
}

export const TheaterTheoRapReducer = (state=TheaterTheoRapState, action) => {
    switch(action.type){
        case 'theaterTheoRapReducer/GET_API': {
            return {...state, arrTheoRap: action.data};
        }
        default: return {...state}
    }
}