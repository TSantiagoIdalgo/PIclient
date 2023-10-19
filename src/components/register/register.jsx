import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './register.module.css'
import axios from 'axios'
import validate from './validates'
import Input from '../input/input'
import icon from '../../assets/icon/icon.webp'

export default function Register () {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [registered, setRegister] = useState(false)
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: ''
    })
    async function onSubmit () {
        const error = await validate(user)
        if (Object.keys(error).length === 0) {
            await axios.post('https://piback-end.onrender.com/users', user)
            setRegister(true)
        }
        setErrors(error)
    }
    if (!registered) {
        return (
        <div className={Style.register}>
          <form className={Style.register_form} onSubmit={(e) => e.preventDefault()} autoComplete='off'>
            <img src={icon} alt="icon" className={Style.register_icon} />
            <Input type='userName' label='User Name' user={user}setUser={setUser} error={errors.userName}/>
            <Input type='email' label='Email Adress' user={user} setUser={setUser} error={errors.email}/>
            <Input type='password' label='Password' user={user} setUser={setUser} error={errors.password}/>
            <div className={Style.buttons}>
              <button className={Style.login_button} onClick={() => navigate('/login')}>Back</button>
              <button className={Style.login_button} onClick={onSubmit}>Register</button>
            </div>
          </form>
        </div>
    )
}   else {
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
}