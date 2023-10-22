import Style from './user.module.css'
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import validate from '../register/validates';

export default function User () {
    const [modify, handleModify] = useState(false)
    const token = window.localStorage.getItem('USER_INFO')
    const decodedToken = jwt_decode(token)
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: ''
    })
    async function onSubmit () {
        const error = await validate(user)
        setErrors(error)
        console.log(errors);
    }
    return (
        <div className={Style.background}>
            <form className={Style.account} onSubmit={(e) => e.preventDefault()}> 
                <h1>Account</h1>
                <div className={Style.account_info}>
                    <span>User Name:</span>
                    {modify 
                    ? <input/>
                    : <h2>{decodedToken.name}</h2>}
                    <span className={Style.errors}>{errors?.userName}</span>

                    <span>Email Adress:</span>
                    {modify 
                    ? <input/>
                    : <h2>{decodedToken.email}</h2>}
                    <span className={Style.errors}>{errors?.email}</span>

                    <span>Password:</span>
                    {modify 
                    ? <input/>
                    : <h2>******</h2>}
                    <span className={Style.errors}>{errors?.password}</span>
                </div>
                <div>
                <button onClick={() => { modify ? handleModify(false) : handleModify(true)}}>✏️</button>
                {modify ? <button onClick={onSubmit}>✔</button> : <button>🗑️</button>}
                </div>
            </form>
        </div>
    )
}