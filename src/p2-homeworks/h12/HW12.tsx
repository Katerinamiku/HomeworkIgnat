import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {themeChangeAC, ThemeReducerType} from "../h10/bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

export type ThemesType = 'default' | 'dark' | 'red' | 'surprise-me'
const themes: ThemesType[] = ['default', 'dark', 'red', 'surprise-me'];


function HW12() {
    const themeStyles = useSelector<AppStoreType, ThemeReducerType>(state => state.theme);
    const dispatch = useDispatch();

    const onChangeCallback = (theme: ThemesType) => {
        dispatch(themeChangeAC(theme));
    }
    const theme = themeStyles.theme;
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
