import { useNavigate } from 'react-router-dom'
import Style from './card.module.css'

export default function Card (props) {
    const navigate = useNavigate()
    const {id, image, name, continent} = props.props
    return (
        <div className={Style.card} onClick={() => {navigate(`/country/${id}`)}}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{continent}</h2>
        </div>
    )
}