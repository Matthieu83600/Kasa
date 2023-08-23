// Imporation des éléments dont on a besoin 
import React from 'react'
import { useState } from 'react'
import ArrowTop from '../../assets/images/ArrowTop.png'
import './Collapse.scss'

// Création de la fonction composant Collapse en utilisant des props
function Collapse({ title, content }) {

    // Indication que la Collapse est fermée de base avec le state
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`collapse-item ${isOpen ? "open" : ""}`}>
            <div className="collapse-header">
                <h2>{title}</h2>
                <button className="collapse-toggle-button collapse-button" onClick={() => setIsOpen(!isOpen)}>
                <img src={ArrowTop} alt="Chevron" className={`chevron-up ${isOpen ? "open" : ""}`}/>
                </button>
            </div>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                <div>{content}</div>
            </div>
        </div>
    )
}

export default Collapse