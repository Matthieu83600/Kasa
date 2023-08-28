// Importation des éléments dont on a besoin
import React from 'react'
// Importation des hooks
import { useParams } from 'react-router-dom'
// Importation des données des locations 
import DataLogements from '../../datas/logements.json'
// Importation images
import StarActive from '../../assets/images/StarActive.png'
import StarInactive from '../../assets/images/StarInactive.png'
// Design
import './_Rating.scss'

function Rating() {
    // Récupération des données par rapport à l'ID de la location
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    // Création d'un tableau qui va contenir les étoiles pour la note    
    const stars = []
    // Nombre d'étoiles de la location 
    const rating = location.rating
    // Note maximale
    const maxRating = 5

    // Boucle comptant le nombre d'étoiles de la location que l'on ajoute au tableau "stars" avec push
    for (let i = 0 ; i < rating; i++) {
        stars.push(<img key={i} src={StarActive} alt="Etoile pleine" />)
    }

    // Boucle comptant les étoiles manquantes de la note de la location que l'on ajoute au tableau "stars" avec push
    for (let i = 0 ; i < maxRating - rating; i++) {
        stars.push(<img key={rating + i} src={StarInactive} alt="Etoile vide" />)
    }

    return (

        <div className='rating'>
            {stars}
        </div>
        
    )
}

export default Rating