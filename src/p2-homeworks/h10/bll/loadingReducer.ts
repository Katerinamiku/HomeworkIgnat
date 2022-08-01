import {LoadingType} from "../HW10";

const initState: LoadingType = {
    loadingValue: false
}

type SetLoadingAT = {
    type: 'SET_LOADING'
    loadingValue: boolean
}

export type ActionType = SetLoadingAT

export const loadingReducer = (state = initState, action: ActionType): LoadingType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loadingValue: action.loadingValue}
        }
        default:
            return state
    }
}

export const loadingAC = (loadingValue: boolean): SetLoadingAT => {
    return {
        type: 'SET_LOADING',
        loadingValue
    }

}
