import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import jwt_decode from 'jwt-decode';
import Style from './userinfo.module.css'
import Logged from '../../../assets/icon/user/access.png'

export default function UserInfo () {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const token = window.localStorage.getItem('USER_INFO')
    function loggout () {
        window.localStorage.removeItem('USER_INFO')
        navigate('/')
    }
    useEffect(() => {
        if (token !== null) {
          const decodedToken = jwt_decode(token)
          setUser(decodedToken)
        }
    }, [token])
    return (
        <div className={Style.modal}>
            <img src={Logged} alt="logged" />
            <div>
            <h1>{user?.name}</h1>
            <h2>{user?.email}</h2>
            <button onClick={() => loggout()}>Loggout</button>
            </div>
        </div> 
    )
}
