import * as actionTypes from "../constants/action-types";

const initialState = {
    message: [],
    messages: []
}

export const messageReducer = (state: {} = initialState, action: {type:string, payload: {}}) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_MESSAGE:
            return state
    
        default:
            return state
    }
}