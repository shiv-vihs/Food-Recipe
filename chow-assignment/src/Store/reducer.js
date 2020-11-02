import * as actionTypes from "./actions/actionTypes"
const initialState = {
    login: true,
    signup: false,
    clicked: false,
    RecipeList: {}
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_TO_LOGIN') {
        return {
            ...state,
            login: true,
            signup: false
        }

    }
    else if (action.type === 'CHANGE_TO_SIGNUP') {
        return {
            ...state,
            login: false,
            signup: true
        }

    }
    else if (action.type === 'DROP_DOWN_STATE') {
        if (state.clicked === false) {
            return {
                ...state,
                clicked: true
            }
        }
        else
            return {
                ...state,
                clicked: false
            }
    }
    else if (action.type === actionTypes.SET_RECIPELIST) {
        //console.log("here");
        return {
            ...state,
            RecipeList: action.list
        }
    }
    return state;
}