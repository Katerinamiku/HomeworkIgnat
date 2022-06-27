import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | 'high' | 'middle' | 'low'

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => (filter === 'all') ? affairs : affairs.filter(affair => affair.priority === filter)

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter(a => a._id !== _id)

function HW2() {
    let [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    let [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            <hr/>
        </div>
    )
}

export default HW2
