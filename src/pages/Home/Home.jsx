// Importation des éléments dont on a besoin 
import React from 'react'
// Importation des composants fonctions
import Banner from '../../components/Banner/Banner'
import LogementsList from '../../components/Gallery/Gallery'

// Création d'une fonction composant pour afficher la page Home
function Home() {
    // La fonction retourne dans le DOM une balise main qui contient :
    return (

        <main>  
            {
                // Affichage des composants Banner et LogementsList sur la page Home
            }
            < Banner page="home" content="Chez vous, partout et ailleurs" />
            < LogementsList />
        </main>

    )
}

export default Home