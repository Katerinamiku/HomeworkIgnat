import {UserType} from "../HW8";

type SortPeopleAT = {
    type: 'sort',
    payload: string
}

type CheckPeopleAT = {
    type: 'check'
    payload: number
}

export type ActionType = SortPeopleAT | CheckPeopleAT;

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === 'down'
                    ? [...state].sort((a, b) => a.name.localeCompare(b.name)).reverse()
                    : state;
        }
        case 'check': {
            return [...state].filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}

export const SortPeopleAC = (payload: string): SortPeopleAT => {
    return {
        type: 'sort',
        payload
    }
}

export const CheckPeopleAC = (payload: number): CheckPeopleAT => {
    return {
        type: 'check',
        payload
    }
}
