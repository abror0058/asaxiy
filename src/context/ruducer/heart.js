import {ADD_TO_HEART, REMOVE_FROM_HEART} from "../action/actionType"

const heart = ( state = [], action)=>{
switch (action.type) {
    case ADD_TO_HEART:
        return state = [...state, action.payload]

    case REMOVE_FROM_HEART:
        return state = state.filter(i => i.id !== action.payload.id)
        
    default:
        return state
}
}

export default heart


