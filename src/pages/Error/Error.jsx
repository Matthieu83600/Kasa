// Importation des éléments dont on a besoin 
import React from 'react'
// Création des liens avec React Router
import { NavLink } from 'react-router-dom'
// Importation image
import Error404 from '../../assets/images/404.png'
// Design
import './_Error.scss'

// Création d'une fonction composant pour afficher la page d'erreur
function Error() {
    return (

        <main className='errorpage'>
            <img src={Error404} alt="Erreur" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {
                // Lien permettant de retourner sur la page Home
            }
            <NavLink to="/">
                Retourner sur la page d’accueil
            </NavLink>
        </main>
        
    )
}

export default Error