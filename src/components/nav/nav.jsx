import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/icon/icon.webp'
import Style from './nav.module.css'
import Login from './login/login/login'
import IsLogged from './login/logged/isLogged'

export default function Nav () {
    const [access, handleAccess] = useState(false)

    const token = window.localStorage.getItem('USER_INFO')
    useEffect(() => {
        if (token !== null) {
        handleAccess(true)
        } else handleAccess(false)
    }, [token])
    return (
        <header className={Style.nav}>
            <Link to='/'><img src={icon} alt="icon" width={60}/></Link>
            <div className={Style.nav_login}>
            <Link to='/countries' className={Style.nav_routes}>Countries</Link>
            <Link to='/activities' className={Style.nav_routes}>Activities</Link>
            {access ? <IsLogged/> : <Login/>}
            </div>
        </header>
    )
}