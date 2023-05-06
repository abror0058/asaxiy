import {
    ADD_TO_HEART,
    REMOVE_FROM_HEART,
    ADD_TO_CARD,
    REMOVE_FROM_CARD,
    DEC_FROM_CARD,
    DELETE_ALL_CART,
    LOG_IN,
    LOG_OUT
} from "./actionType"


export const addToCard = (payload) => {
    return {
        type: ADD_TO_CARD, payload: payload
    }
}
export const addToHeart = (payload) => {
    return {
        type: ADD_TO_HEART, payload: payload
    }
}

export const removeFromHeart = (payload) => {
    return {
        type: REMOVE_FROM_HEART, payload: payload
    }
}




export const removeFromCard = (payload) => {
    return {
        type: REMOVE_FROM_CARD, payload: payload
    }
}
export const decFromCard = (payload) => {
    return {
        type: DEC_FROM_CARD, payload: payload
    }
}

export const deleteAllCart = () => {
    return {
        type: DELETE_ALL_CART
    }
}

export const logIn = (payload) => {
    return {
        type: LOG_IN, payload
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

