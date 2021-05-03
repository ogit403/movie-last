const CommentState = {
    comments: []
}

export const CommentReducer = (state=CommentState, action) => {
    switch(action.type){
        case 'commentReducer/GET_API': {
            return {...state, comments: action.data}
        }
        default: return{...state};
    }
}