import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Input from '../input/input'
import Style from './login.module.css'
import icon from '../../assets/icon/icon.webp'

export default function Login () {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        userName: '',
        email: ''
    })
    async function onSubmit (e) {
      e.preventDefault()
      await axios.post('https://piback-end.onrender.com/users/login', user)
        .then(res => {
          if (res.status === 203) setError('Incorrect username or password')
          if (res.status === 200) navigate('/activities')
          window.localStorage.setItem('USER_INFO', JSON.stringify(res.data.token))
        })
    }
    return (
        <section className={Style.login} onSubmit={onSubmit}>
          <form autoComplete="off" className={Style.login_form}>
          <img src={icon} alt="icon" className={Style.register_icon} />
          <Input type='email' label='Email Adress' user={user} setUser={setUser}/>
          <Input type='password' label='Password' user={user} setUser={setUser} error={error}/>
          <div className={Style.buttons}>
            <button className={Style.login_button} onClick={() => navigate('/register')}>Register</button>
            <button className={Style.login_button}>Login</button>
          </div>
          </form>
        </section>
    )
}