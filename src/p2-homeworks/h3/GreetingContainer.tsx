import React, {ChangeEvent, KeyboardEvent, FocusEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value.trim()) // need to fix
    }
    const addUser = () => {
        if (name === '') {
            setError('Name is required!')
            setName('')
        } else {
            alert('Hello ' + name + '!') // need to fix
            addUserCallback(name)
            setName('')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }
    }
    const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
        setError('')
    }
    let totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
            onFocusHandler={onFocusHandler}
        />
    )
}

export default GreetingContainer
