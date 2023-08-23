// Importation des éléments dont on a besoin
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import './Header.scss'

// Création d'une fonction composant Header
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
                    A propos
                </NavLink>
        </nav>
       </header>
    )
}

export default Header