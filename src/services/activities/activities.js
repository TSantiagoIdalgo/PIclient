import axios from "axios";

export const fetchActivities = async (id, userId) => {
    await axios.delete(`https://piback-end.onrender.com/activities/${id}/${userId}`)
    .catch(err => {
        throw new Error(`Network error: ${err}`)
    })
}