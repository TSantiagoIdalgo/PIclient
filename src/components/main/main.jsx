import { useNavigate } from 'react-router-dom'
import Style from './main.module.css'
import world from '../../assets/background/world.webp'

export default function Main () {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('USER_INFO')
    return (
        <main className={Style.main}>
            <div>
            <p className={Style.main_text}>All your favorite <span>countries</span> <br/> at your fingertips</p>
            <button className={Style.main_button} 
            onClick={() => navigate(`${token !== null ? '/countries' : '/login'}`)}>Start searching now</button>
            </div>
            <img src={world} alt="world" />
        </main>
    )
}