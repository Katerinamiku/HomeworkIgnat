import React from 'react'
import s from "./SuperDoubleRange.module.css";
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
}

const minDistance = 1;

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <div className={s.sliderWrapper}>
            <Slider getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    disableSwap
                    size={'small'}
                    sx={{color: '#03e9f4'}}/>
        </div>
    );
}

export default SuperDoubleRange
