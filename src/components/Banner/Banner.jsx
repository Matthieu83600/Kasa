// Importation des éléments dont on a besoin 
import React from 'react'
import BannerImgHome from '../../assets/images/ImageHome.png'
import BannerImgAbout from '../../assets/images/ImageAbout.png'
import './Banner.scss'

// Création d'une fonction composant avec des props pour afficher la bannière
function Banner({ page, content }) {
    /* 
        Utilisation d'un ternaire pour indiquer l'image à utiliser lorsque l'on se trouve
        sur la page Home ou la page About 
    */    
    const imageSrc = page === "home" ? BannerImgHome : BannerImgAbout
   
    return (
        <div className='banner-container'>
            <img src={imageSrc} alt="Paysage" />
            <div className='banner-content'>
                <p>{content}</p>
            </div>
        </div>
    )
    
}

export default Banner