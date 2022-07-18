import React from 'react'
import {CheckPeopleAC, homeWorkReducer, SortPeopleAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortPeopleAC('up'))
    console.log(newState)

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortPeopleAC('down'));

    expect(newState.length).toBe(6)
    expect(newState[5].name).toBe('Александр')
    expect(newState[0].name).toBe('Кот')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckPeopleAC(18))
    console.log(newState)
    expect(newState.length).toBe(4)
    expect(newState[0].age).toBe(66)
    // expect(newState[0].age).toBeGreaterThanOrEqual(18);
    // expect(newState[1].age).toBeGreaterThanOrEqual(18);
    // expect(newState[2].age).toBeGreaterThanOrEqual(18);
    // expect(newState[3].age).toBeGreaterThanOrEqual(18);

    newState.forEach((e) => {
        expect(e.age).toBeGreaterThanOrEqual(18);
    });
})
