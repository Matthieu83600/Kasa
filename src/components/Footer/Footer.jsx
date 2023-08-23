// Importation des éléments dont on a besoin
import React from 'react'
import WhiteLogo from '../../assets/images/whiteLogo.png'
import './Footer.scss'

// Création d'une fonction composant Footer
function Footer() {
    
    return (
       <footer>
        <img src={WhiteLogo} alt="Logo de Kasa" />

        <p>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
}

export default Footer