import { useState } from 'react'

export const useHandle = () => {  
    const [state, handleState] = useState(false)

    function changeState () {
        state ? handleState(false) : handleState(true)
    }

    return { state, changeState }
}