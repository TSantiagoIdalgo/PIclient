import axios from "axios"

export const validateActivity = async (input, userId) => {
    let error = {}
    const search = await axios.get(`http://localhost:3001/activities/${input.name}/${userId}`)
    if (input.name.length < 3) error.name = 'Name is too short'
    else if (input.name.length > 15) error.name = 'Name is too long'
    else if (/[^a-zA-Z]/.test(input.name)) error.name = 'The name must only include letters'
    else if (search.status !== 203) error.name = 'You cannot repeat the same name'
    else delete error.name

    if (input.difficulty < 1 || input.difficulty > 5) error.difficulty = 'Select a difficulty from 1-5'

    if (input.duration.length === 0) error.duration = 'You must select a duration'

    if (input.id.length === 0) error.id = 'You must select a country'

    return error
}