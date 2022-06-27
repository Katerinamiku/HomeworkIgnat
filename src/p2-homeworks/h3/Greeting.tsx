import React, {ChangeEvent, KeyboardEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
    onFocusHandler: (event: FocusEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, onFocusHandler} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.input;// need to fix with (?:)
    const warningClass = s.warning

    return (
        <div className={s.inputBlock}>
            <div className={s.inputGreeting}>
                <input value={name} className={inputClass} onChange={setNameCallback} onFocus={onFocusHandler} onKeyDown={onKeyPressHandler}/>
                <button onClick={addUser}>
                    add</button>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>
            <div><span className={warningClass}>{error}</span></div>

        </div>
    )
}

export default Greeting
