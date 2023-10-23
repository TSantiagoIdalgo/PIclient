import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../redux/actions/actions";
import jwt_decode from 'jwt-decode'

export const useActivities = () => {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    const token = window.localStorage.getItem('USER_INFO')
    const decodedToken = jwt_decode(token)
    useEffect(() => {
        dispatch(getAllActivities(decodedToken.email))
    }, [decodedToken.email, dispatch])

    return {activities}
}