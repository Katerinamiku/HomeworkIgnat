import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './common/c7-SuperRange/SuperRange.module.css';
import ds from './common/c8-SuperDoubleRange/SuperDoubleRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeDoubleRange = (value: number[]) => {
        setValue1(value[0]);
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.ranges}>
                <div>
                    <span className={s.rangeValues}>{value1}</span>
                    <SuperRange onChangeRange={onChangeRange}/>
                </div>

                <div className={ds.doubleRange}>
                    <span className={s.rangeValues}>{value1}</span>
                        <SuperDoubleRange value={[value1, value2]}
                                          onChangeRange={onChangeDoubleRange}/>
                    <span className={s.rangeValues}>{value2}</span>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
