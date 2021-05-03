const DetailMovieState = {
    cinemas: []
}

export const DetailMovieReducer = (state=DetailMovieState, action) => {
    switch(action.type){
        case 'detailMovieReducer/GET_API': {
            return {...state, cinemas: action.data}
        }
        default: return {...state}
    }
}