import {ThemesType} from "../../h12/HW12";

export type ThemeReducerType = {
    theme: string
}
const initState = {
    theme: 'default'
}

type themeChangeAT = {
    type: 'THEME_CHANGE'
    theme: ThemesType
}

export type ActionType = themeChangeAT

export const themeReducer = (state = initState, action: ActionType): ThemeReducerType => {
    switch (action.type) {
        case 'THEME_CHANGE': {
            return {...state, theme: action.theme}
        }
        default:
            return state
    }
}

export const themeChangeAC = (theme: ThemesType): themeChangeAT => {
    return {
        type: 'THEME_CHANGE',
        theme
    }

}
