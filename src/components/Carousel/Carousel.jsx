// Importation des éléments dont on a besoin 
import React from 'react'
// Importation des hooks
import { useState } from 'react'
import { useParams } from 'react-router-dom'
// Importation des données des locations 
import DataLogements from '../../datas/logements.json'
// Importation des images
import ArrowLeft from '../../assets/images/ArrowLeft.png'
import ArrowRight from '../../assets/images/ArrowRight.png'
// Design
import './_Carousel.scss'

// Création d'une fonction composant Carousel
function Carousel() {
    // Récupération de l'ID de la location avec le hook useParams de React Router
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id)

    // Utilisation du state local pour afficher la première image
    const [slide, setSlide] = useState(0)

    // Création des fonctions permettant de faire défiler les images récupérées
    const prevPicture = () => {
        setSlide(slide === 0 ? location.pictures.length - 1 : slide - 1)
    }

    const nextPicture = () => {
        setSlide(slide === location.pictures.length - 1 ? 0 : slide + 1)
    }

    return (
        
        <section className='carousel'>
            <div className='carousel__container'>  
                {location.pictures.map((picture, index) => (
                    <img 
                        src={picture}
                        alt={location.title}
                        key={index}
                        className={slide === index ? "carousel__container-slide" : "carousel__container-slidehidden"}
                    />    
                ))}
                <img 
                    src={ArrowLeft} 
                    alt="Flèche de gauche" 
                    className='carousel__container-arrowleft arrow'
                    onClick={prevPicture}
                />
                <img 
                    src={ArrowRight} 
                    alt="Flèche de droite" 
                    className='carousel__container-arrowright arrow' 
                    onClick={nextPicture}
                />
                <span className='carousel__container-indicator'>
                    {slide + 1}/{location.pictures.length}
                </span>
            </div>
        </section>

    )
}

export default Carousel 