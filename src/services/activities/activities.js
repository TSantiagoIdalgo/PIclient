import axios from "axios";

export const fetchActivities = async (id, userId) => {
    await axios.delete(`http://localhost:3001/activities/${id}/${userId}`)
    .catch(err => {
        throw new Error(`Network error: ${err}`)
    })
}