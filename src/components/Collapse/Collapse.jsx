import { useState } from 'react'
import ArrowTop from '../../assets/images/ArrowTop.png'
import './Collapse.scss'

function Collapse({ title, content }) {
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
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Collapse