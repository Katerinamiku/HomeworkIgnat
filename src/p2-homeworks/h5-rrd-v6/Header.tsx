import {Squash as Hamburger} from 'hamburger-react';
import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './HW.module.css'

function Header() {

    const [isActive, setIsActive] = useState<boolean>(false)
    const activeMenuStyle = isActive && s.menuActive
    const showMenu = () => {
        setIsActive(true)
    }
    const hideMenu = ()=> {
        setIsActive(false)
    }

    return (
        <div className={s.navMenu}>
            <div className={s.nav} onMouseEnter={showMenu} onMouseLeave={hideMenu}>
                <Hamburger color={"#03e9f4"} size={20} toggled={isActive} toggle={setIsActive}/>
                <div className= {`${s.menu} ${activeMenuStyle}`}>
                    <li><NavLink to='/pre-junior'> Pre-Junior </NavLink></li>
                    <li><NavLink to='/junior'>Junior</NavLink></li>
                    <li><NavLink to='/junior-plus'>Junior+</NavLink></li>
                </div>
            </div>
        </div>
    )
}

export default Header
