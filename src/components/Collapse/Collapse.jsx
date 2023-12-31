// Imporation des éléments dont on a besoin 
import React from 'react'
// Impartation des hooks
import { useState } from 'react'
// Importation image
import ArrowTop from '../../assets/images/ArrowTop.png'
// Design
import './_Collapse.scss'

// Création de la fonction composant Collapse en utilisant des props
function Collapse({ title, content }) {

    // Indication que la Collapse est fermée de base avec le state local
    const [isOpen, setIsOpen] = useState(false)

    return (
        
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="collapse__header">
                <h2>{title}</h2>
                <button className="collapse__header-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={ArrowTop} alt="Chevron" className={`chevron-up ${isOpen ? "open" : ""}`}/>
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : ""}`}>
                {content}
            </div>
        </div>
        
    )
}

export default Collapse