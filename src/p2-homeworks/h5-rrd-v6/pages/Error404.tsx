import React from 'react'
import s from './error.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
                <h1>404</h1>
                <h2>There's nothing here.</h2>
            </div>
    )
}

export default Error404
