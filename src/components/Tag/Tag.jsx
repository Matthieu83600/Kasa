import { useParams } from 'react-router-dom'
import DataLogements from '../../datas/logements.json'

function Tag() {
    const { id } = useParams()

    const location = DataLogements.find((location) => location.id === id)

    return (
        <div className='logements-tag-container'>
            <ul className='tag-container'>
                {location.tags.map((tag, index) => (
                    <li key={index} className='tag-item'>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tag