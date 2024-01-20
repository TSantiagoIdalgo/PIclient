import { validateActivity } from "../../components/activities/addActivity/validates";
import axios from "axios";

export const useOnSubmit = async (changeState, setError, inp, userId, e) => {
    e.preventDefault()
    const errors = await validateActivity(inp, userId)
        if(Object.keys(errors).length === 0) {
            await axios.post('http://localhost:3001/activities', inp)
            changeState(true)
        }
        setError(errors)
}
