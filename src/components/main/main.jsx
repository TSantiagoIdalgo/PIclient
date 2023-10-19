import { Link } from 'react-router-dom'
import Style from './main.module.css'
import world from '../../assets/background/world.webp'

export default function Main () {
    return (
        <main className={Style.main}>
            <div>
            <p className={Style.main_text}>All your favorite <span>countries</span> <br/> at your fingertips</p>
            <Link to='/countries'><button className={Style.main_button}>Start searching now</button></Link>
            </div>
            <img src={world} alt="world" />
        </main>
    )
}