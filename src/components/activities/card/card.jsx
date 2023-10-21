import Style from './card.module.css'

export default function Card (props) {
    const {image, name, capital} = props.props
    return (
        <div className={Style.card}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{capital}</h2>
        </div>
    )
}