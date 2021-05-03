const LoginState = {
    users: {},
    err: {}
}

export const LoginReducer = (state=LoginState, action) => {
    switch(action.type){
        case 'loginReducer/FAILED': {
            return {...state, err: action.data};
        }
        case 'loginReducer/SUCCESS': {
            return {...state, users: action.data, err: {}};
        }  
        case 'loginReducer/DANG_XUAT': {
            return {...state, users: ''}
        }
        default: return {...state}
    }
}