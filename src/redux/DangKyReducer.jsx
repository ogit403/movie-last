const DangKyState = {
    err: {}
}

export const DangKyReducer = (state = DangKyState, action) => {
    switch(action.type){
        case 'dangKyReducer/POST_API': {
            // console.log(action.data)
            return {...state, err:action.data};
        }
        default: return {...state}
    }
}