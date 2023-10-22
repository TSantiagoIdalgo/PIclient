import Style from './card.module.css'

export default function CardCountry (props) {
    const { continent, image, name} = props.props
    return (
        <figure className={Style.card}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h2>{continent}</h2>
            <button>Detail</button>
        </figure>
    )
}