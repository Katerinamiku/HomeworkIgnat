import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const priorityColor = props.affair.priority === 'high' ? s.red : props.affair.priority === 'middle' ? s.yellow : props.affair.priority === 'low' ? s.green : ''
    return (
        <div key={props.affair._id} className={s.listItems}>
            <span className={s.name}>{props.affair.name}</span>
            <span className={`${priorityColor} ${s.priority}`}>{props.affair.priority}</span>
            <button onClick={() => {
                props.deleteAffairCallback(props.affair._id)
            }}>
                X
            </button>
        </div>
    )
}

export default Affair
