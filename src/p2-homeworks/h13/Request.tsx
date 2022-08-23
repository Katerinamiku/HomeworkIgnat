import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from './HW13.module.css';
import {RequestAPI} from "./RequesrAPI";

const Request = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')

    const onClickHandler = () => {
        RequestAPI.post(success)
            .then(res => {
                setResponse(res.data.info)
                setError(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setResponse(error.response.data.info)
                setError(error.response.data.errorText)
            })
    }

    return (<>
            <div className={s.requestBlock}>
                <SuperButton onClick={onClickHandler}> Button </SuperButton>
                <SuperCheckbox checked={success}
                               onChange={(e) => setSuccess(e.currentTarget.checked)}/>
            </div>
            <span>{error + '. ' + response}</span>
        </>
    );
};

export default Request;
