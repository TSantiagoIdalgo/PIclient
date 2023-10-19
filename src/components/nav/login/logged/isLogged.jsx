import { useState } from 'react'
import Logged from '../../../../assets/icon/user/access.png'
import UserInfo from '../../userInfo/userinfo'
import Style from './isLogged.module.css'

export default function IsLogged () {
    const [user, handleUser] = useState(false)
    function handler () {
        user ? handleUser(false) : handleUser(true)
    }
    return (
      <div>
        <button className={Style.login} onClick={handler}>
            <img src={Logged} alt="logged" className={Style.logged_button}/>
        </button>
        {user ? <UserInfo/> : null}
      </div>
    )
}