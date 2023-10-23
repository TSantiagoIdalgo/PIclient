import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useHandle } from '../../../hooks/commonHooks/useHandle'
import { useOnSubmit } from '../../../hooks/addActivities/addActivity';
import { UsefetchCountries } from '../../../services/countries/countries';
import jwt_decode from 'jwt-decode';
import Style from './addActivity.module.css'
import icon from '../../../assets/icon/icon.webp'

export default function AddActivity () {
    const token = window.localStorage.getItem('USER_INFO')
    const decodedToken = jwt_decode(token)
    const [inp, setInp] = useState({
        id: [],
        name: '',
        duration: '',
        difficulty: 0,
        season: 'summer',
        userId: decodedToken.email
    })
    const { state, changeState } = useHandle()
    const { error } = useOnSubmit(changeState, inp)
    const { countries } = UsefetchCountries()
    const navigate = useNavigate()
    function inputOnChange (e) {
        if (e.target.name === 'difficulty') {
            setInp({ ...inp, difficulty: parseInt(e.target.value)})
        } else if (e.target.name === 'country') {
            setInp({ ...inp, id: [...inp.id, e.target.value] })
            const country = countries.filter((c) => { return c.id == e.target.value })
            alert(`País añadido: ${country[0].name}`)
        } else setInp({ ...inp, [e.target.name]: e.target.value})
    }
    
    if (!state) {return (
        <div className={Style.background}>
            <form className={Style.activity_form} onSubmit={(e) => e.preventDefault()} autoComplete='off'>
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
                    {countries?.map((country) => (
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