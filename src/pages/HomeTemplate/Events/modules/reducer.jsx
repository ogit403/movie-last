const EventsState = {
    events: []
}

export const EventsReducer = (state=EventsState, action) => {
    switch(action.type){
        case 'eventReducer/GET_API': {
            return {...state, events: action.data}
        }

        default: return {...state}
    }
}