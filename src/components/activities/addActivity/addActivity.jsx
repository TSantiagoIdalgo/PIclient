import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCountries } from '../../../redux/actions/actions'
import { validateActivity } from './validates'
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import Style from './addActivity.module.css'
import icon from '../../../assets/icon/icon.webp'
import { useNavigate } from 'react-router-dom';
export default function AddActivity () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = window.localStorage.getItem('USER_INFO')
    const decodedToken = jwt_decode(token)
    const state = useSelector(state => state.countries)
    const [create, setCreate] = useState(false)
    const [error, setError] = useState({})
    const [inp, setInp] = useState({
        id: [],
        name: '',
        duration: '',
        difficulty: 0,
        season: 'summer',
        userId: decodedToken.email
    })

    async function onSubmit (e) {
        e.preventDefault()
        const errors = await validateActivity(inp)
        if(Object.keys(errors).length === 0) {
            await axios.post('https://piback-end.onrender.com/activities', inp)
            setCreate(true)
        }
        setError(errors)
    }
    function inputOnChange (e) {
        if (e.target.name === 'difficulty') {
            setInp({ ...inp, difficulty: parseInt(e.target.value)})
        } else if (e.target.name === 'country') {
            setInp({ ...inp, id: [...inp.id, e.target.value] })
            const country = state.filter((c) => { return c.id == e.target.value })
            alert(`País añadido: ${country[0].name}`)
        } else setInp({ ...inp, [e.target.name]: e.target.value})
    }
    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch])
    if (!create) {return (
        <div className={Style.background}>
            <form className={Style.activity_form} onSubmit={onSubmit}>
                <h1>Create your activity</h1>
                <img src={icon} alt="icon" className={Style.activity_form_icon}/>

                <div className={Style.activity_form_inp}>
                    <input type="text" name='name' placeholder='Set a name' onChange={inputOnChange}/>
                    <span>{error?.name}</span>
                </div>

                <div className={Style.activity_form_inp}>
                    <input type="time" name='duration' onChange={inputOnChange}/>
                    <span>{error?.duration}</span>
                </div>

              <div className={Style.activity_form_list}>

                <div className={Style.activity_form_inp}>
                    <input type="number" placeholder='difficulty' name='difficulty' onChange={inputOnChange}/>
                    <span>{error?.difficulty}</span>
                </div>

                <select name="season" onChange={inputOnChange}>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                </select>

                <div className={Style.activity_form_select}>

                <select name="country" onChange={inputOnChange}>
                    <option value="">Countries</option>
                    {state?.map((country) => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>
                <span>{error?.id}</span>

                </div>
              </div>

                <button className={Style.activity_form_button}>Create</button>
            </form>
        </div>
    )} else {
        return (
          <div className={Style.background}>
            <main className={Style.activity_form}>
              <h1>The activity has been created</h1>
              <button 
              className={Style.activity_form_button} 
              onClick={() => navigate('/activities')}>Return to activities</button>
            </main>
          </div>
        )
    }
}