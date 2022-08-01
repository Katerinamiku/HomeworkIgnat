import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Loader from "./Loader";
import s from './Loader.module.css';


export type LoadingType = {
    loadingValue: boolean
}

function HW10() {
    const loadingState = useSelector<AppStoreType, LoadingType>(state => state.loading)
    const dispatch = useDispatch();

    const loading = loadingState.loadingValue

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => dispatch(loadingAC(false)), 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={s.loadingWindow}>
                {loading
                    ? (
                        <div>
                            <Loader/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}
                <hr/>
            </div>
            )
            }

            export default HW10
