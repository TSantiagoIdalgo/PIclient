import ReactDOM  from 'react-dom'
import Style from './card.module.css'
import UserActivity from '../userActivity/userActivity'
import { useHandle } from '../../../hooks/commonHooks/useHandle'

export default function Card (props) {
    const { image, name, continent, activities} = props.props
    const { state, changeState } = useHandle()
    return (
        <div className={Style.card} onClick={changeState}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{continent}</h2>

            {state 
            ? ReactDOM.createPortal(<UserActivity activities={activities} handleModal={changeState}/>, 
            document.querySelector('#modal')) 
            : ReactDOM.createPortal(null, document.querySelector('#modal')) }
            
        </div>
    )
}