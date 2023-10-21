import { GET_ALL_ACTIVITIES, GET_ALL_COUNTRIES } from "../actions/actions"

const initialState = {
    activities: [],
    countries: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ACTIVITIES: return { ...state, activities: action.payload}
        case GET_ALL_COUNTRIES: return { ...state, countries: action.payload}
        default: return { ...state }
    }
}

export default reducer