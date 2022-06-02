import * as actionTypes from "../constants/action-types";

export const newMessage = (message: string) => {
    return {
        type: actionTypes.ADD_NEW_MESSAGE,
        payload: {
            message: message
        }
    }
}