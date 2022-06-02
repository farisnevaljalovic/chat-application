import * as actionTypes from "../constants/action-types";

export const connected = (status: boolean) => {
    return {
        type: actionTypes.CONNECTED,
        payload: {
            status: status
        }
    }
}

export const addUser = (username: string) => {
    return {
        type: actionTypes.ADD_NEW_USER,
        payload: {
            username: username
        }
    }
}

export const addConnectedUser = (username: string) => {
    return {
        type: actionTypes.ADD_CONNECTED_USER,
        payload: {
            username: username
        }
    }
}

export const removeConnectedUser = (username: string) => {
    return {
        type: actionTypes.REMOVE_CONNECTED_USER,
        payload: {
            username: username
        }
    }
}

export const connectedUsers = () => {
    return {
        type: actionTypes.CONNECTED_USERS
    }
}

