import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllActivities } from '../../redux/actions/actions';
import { NavLink } from 'react-router-dom';
import Card from './card/card';
import jwt_decode from 'jwt-decode';
import Style from './activities.module.css'

export default function Activities () {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    const token = window.localStorage.getItem('USER_INFO')
    const decodedToken = jwt_decode(token)
    useEffect(() => {
        dispatch(getAllActivities(decodedToken.email))
    }, [decodedToken.email, dispatch])
    return (
        <div className={Style.background}>
            {activities?.map((a) => (
                <Card key={a.id} props={a}/>
            ))}
            <NavLink to='/addActivity' className={Style.add_template}>
                <span className={Style.add_template_icon}>+</span>
            </NavLink>
        </div>
    )
}