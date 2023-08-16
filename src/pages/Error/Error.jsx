import { NavLink } from 'react-router-dom'
import Error404 from '../../assets/images/404.png'
import './Error.scss'

function Error() {
    return (
        <div className='errorpage'>
            <img src={Error404} alt="Erreur" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    )
}

export default Error