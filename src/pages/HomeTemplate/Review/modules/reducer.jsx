const ReviewState = {
    review: []
}

export const ReviewReducer = (state=ReviewState, action) => {
    switch(action.type){
        case 'reviewReducer/GET_API': {
            return {...state, review: action.data};
        }

        default: return {...state}
    }
}