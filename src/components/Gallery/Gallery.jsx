// Importation des éléments dont on a besoin 
import React from 'react'
import { Link } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'
import './Gallery.scss'

// Création d'une fonction composant LogementsList récupérant les données de chaque location du JSON
function LogementsList() {

    return (
        <section className='logements-container'>
            <div className='logements-list'>
                {DataLogements.map((location) => (
                    <div key={location.id} className='logements-item'>
                        <Link to={"/logements/" + location.id} className='logements-card'>
                            <img src={location.cover} alt={location.title} className='logements-cover'/>
                            <h2 className='logements-title'>{location.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LogementsList