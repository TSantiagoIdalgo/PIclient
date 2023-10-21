import axios from "axios"

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'

export const getAllCountries = () => (dispatch) => {
    axios.get('https://piback-end.onrender.com/country').then(({ data }) => {
        return dispatch ({
            type: GET_ALL_COUNTRIES,
            payload: data
        })
    })
}

export const getAllActivities = (id) => (dispatch) => {
    axios.get(`https://piback-end.onrender.com/users/${id}/activities`).then(({ data }) => {
        return dispatch ({
            type: GET_ALL_ACTIVITIES,
            payload: data
        })
    })
}
