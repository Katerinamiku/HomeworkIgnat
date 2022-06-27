import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './HW.module.css'

function Header() {

    return (
        <div className={s.navMenu}>
        <div className={s.nav}>
            <input type={'checkbox'} />
            <span></span>
            <span></span>
            <span></span>
            <div className= {s.menu}>
                <li><NavLink to='/pre-junior'> Pre-Junior </NavLink></li>
                <li><NavLink to='/junior'>Junior</NavLink></li>
                <li><NavLink to='/junior-plus'>Junior+</NavLink></li>
            </div>
        </div>
    </div>
    )
}

export default Header
