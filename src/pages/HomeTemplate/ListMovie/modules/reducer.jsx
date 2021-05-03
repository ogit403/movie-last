const ListMovieState = {
    listMovie: []
}

export const ListMovieReducer = (state=ListMovieState, action) => {
    switch(action.type){
        case 'listMovieReducer/GET_API': {
            return {...state, listMovie: action.data};
        }

        default: return {...state}
    }
}