import * as actionTypes from "../constants/action-types";

const initialState = {
    connect: false,
    username: '',
    connectedUsers: [],
}

export const userReducer = (state: {} = initialState, action: { type: string, payload: {} }) => {
    switch (action.type) {
        case actionTypes.CONNECTED:
            return state
        case actionTypes.ADD_NEW_USER:
            return state
        case actionTypes.ADD_CONNECTED_USER:
            return state
        case actionTypes.CONNECTED_USERS:
            return state
        case actionTypes.REMOVE_CONNECTED_USER:
            return state
        default:
            return state
    }
}