import Style from './input.module.css'

export default function Input ({ type, label, user, setUser, error }) {
    function changeUser (e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <div className={Style.group}>
            <input type={type} name={type} id={type} onChange={changeUser} className={Style.input} placeholder=' ' />
            <label htmlFor={type} className={Style.label} >{label}</label>
            <span>{error}</span>
        </div>
    )
}