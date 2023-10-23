import Style from '../register.module.css'
import icon from '../../../assets/icon/icon.webp'
import { useNavigate } from 'react-router-dom'

export default function Registered () {
    const navigate = useNavigate()
    return (
        <section className={Style.registered}>
          <div className={Style.registered_login}>
            <img src={icon} alt="icon" className={Style.register_icon} />
            <h2>Successfully registered!</h2>
            <p>Check your email to verify your user</p>
            <button className={Style.login_button} onClick={() => navigate('/login')}>Login</button>
          </div>
        </section>
    )
}