import axios from 'axios'

const validate = async (input) => {
    const error = {}
    const search = await axios.get(`https://piback-end.onrender.com/users/${input.email}`)
    if (search.status !== 204) error.email = 'Email in use'

    if (input.userName.length <= 3) error.userName = 'name too short'

    if (input.userName.length >= 12) error.userName = 'name too loong'

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.email)) error.email = 'Wrong email'
    else if (search.status !== 202) error.email = 'Email in use'
    else delete error.email

    if (!/^(?=.*[@])(?=.*[A-Z])(?=.*\d).*$/.test(input.password) && input.password.length < 6) error.password = 'password must include: @1-9 a-Z'

    return error
} 

export default validate