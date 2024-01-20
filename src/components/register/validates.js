import axios from 'axios'

const validate = async (input) => {
    const error = {}
    const search = await axios.get(`http://localhost:3001/users/${input.email}`)

    if (input.userName.length <= 3) error.userName = 'Name is too short'

    if (input.userName.length >= 12) error.userName = 'Name is too loong'

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.email)) error.email = 'Wrong email'
    else if (search.status !== 202) error.email = 'Email in use'
    else delete error.email

    if (!/^(?=.*[@])(?=.*[A-Z])(?=.*\d).*$/.test(input.password) && input.password.length < 6) error.password = 'password must include: @1-9 a-Z'

    return error
} 

export default validate