import { Link } from 'react-router-dom'
import LoginIcon from '../../../../assets/icon/user/logout.png'
import Style from './login.module.css'

export default function Login () {
    return (
      <div>
        <Link to='/login' className={Style.nav_login_button}><img src={LoginIcon} alt="login" width={50} /></Link>
        <span className={Style.tooltip}>Sign in to your account</span>
      </div>
    )
}