const DetailReviewState = {
    detailReview: []
}

export const DetailReviewReducer = (state=DetailReviewState, action) => {
    switch(action.type){
        case 'detailReviewReducer/GET_API': {
           
            return {...state, detailReview: action.data};
        }
        default: return{...state};
    }
}