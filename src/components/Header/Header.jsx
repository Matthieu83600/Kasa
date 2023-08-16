import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import './Header.scss'

function Header() {
    return (
       <header>
        <NavLink to="/">
            <img src={Logo} alt="Logo de Kasa" />
        </NavLink>
        
        <nav className='navbar'>
                <NavLink to="/">
                    Accueil
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
        </nav>
       </header>
    )
}

export default Header