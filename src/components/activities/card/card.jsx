import { useState } from 'react'
import ReactDOM  from 'react-dom'
import Style from './card.module.css'
import UserActivity from '../userActivity/userActivity'

export default function Card (props) {
    const { image, name, continent, activities} = props.props
    const [userActivity, handleUserActivity] = useState(false)

    function handleModal () {
        userActivity ? handleUserActivity(false) : handleUserActivity(true)
    }

    return (
        <div className={Style.card} onClick={handleModal}>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{continent}</h2>
            {userActivity 
            ? ReactDOM.createPortal(<UserActivity activities={activities} handleModal={handleModal}/>, 
            document.querySelector('#modal')) 
            : ReactDOM.createPortal(null, document.querySelector('#modal')) }
        </div>
    )
}