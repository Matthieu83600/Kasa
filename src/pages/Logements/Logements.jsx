// Importation des éléments dont on a besoin 
import React from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'
import Error from '../../pages/Error/Error'
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import './Logements.scss'

// Création d'une fonction composant permettant d'afficher la page Logements de chaque location
function LogementsCard() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    if (!location) {
        return < Error />
    } else {
        return (
            <main className='logementscard'> 
                < Carousel />
                <section className='logementscard__container'>
                    <div className='logementscard__container-informations'>
                        <div>
                            <h2>{location.title}</h2>
                            <p>{location.location}</p>
                        </div>
                        < Tag />
                    </div>
                    <div className='logementscard__container-host'>
                        <div className='host-id'>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt="Portrait du propriétaire" />
                        </div>
                        < Rating />
                    </div>
                </section>
                <section className='logementscard__collapse'>
                        < Collapse 
                            title='Description'
                            content={location.description}
                        />
                        < Collapse
                            title='Équipements'
                            content= {
                                <ul>
                                    {location.equipments.map((equipments, index) => (
                                        <li key={index}>{equipments}</li>       
                                    ))}
                                </ul>
                                } 
                        />
                </section>
            </main>
        )
    }
}

export default LogementsCard