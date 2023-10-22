import { useNavigate } from 'react-router-dom'
import Style from './card.module.css'


export default function CardCountry (props) {
    const navigate = useNavigate()
    const { id, continent, image, name} = props.props
    return (
        <figure className={Style.card}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h2>{continent}</h2>
            <button onClick={() => navigate(`/country/${id}`)}>Detail</button>
        </figure>
    )
}