import { useState } from "react";
import { validateActivity } from "../../components/activities/addActivity/validates";
import axios from "axios";

export const useOnSubmit = async (changeState, inp) => {
    const [error, setError] = useState({})
    const errors = await validateActivity(inp)
        if(Object.keys(errors).length === 0) {
            await axios.post('https://piback-end.onrender.com/activities', inp)
            changeState(true)
        }
        setError(errors)

    return {error}
}
