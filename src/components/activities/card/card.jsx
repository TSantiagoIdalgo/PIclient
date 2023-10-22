import Style from './card.module.css'

export default function Card (props) {
    const { image, name, continent} = props.props
    return (
        <div className={Style.card}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{continent}</h2>
        </div>
    )
}