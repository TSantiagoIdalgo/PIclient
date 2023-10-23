import axios from "axios";

export const fetchActivities = async (id) => {
    await axios.delete(`https://piback-end.onrender.com/activities/${id}`)
    .catch(err => {
        throw new Error(`Network error: ${err}`)
    })
}