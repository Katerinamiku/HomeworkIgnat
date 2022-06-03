import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    return (
        <div className={s.affairs}>
            <div className={s.listOfAffairs}>
                {mappedAffairs}
            </div>
            <div className={s.filterButtons}>
                <button onClick={() => {
                    props.setFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.setFilter('high')
                }}>High
                </button>
                <button onClick={() => {
                    props.setFilter('middle')
                }}>Middle
                </button>
                <button onClick={() => {
                    props.setFilter('low')
                }}>Low
                </button>
            </div>
        </div>
    )
}

export default Affairs
