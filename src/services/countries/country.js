import { useState, useEffect } from "react";
import axios from "axios";

export const useGetCountry = (id) => {
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://piback-end.onrender.com/country/${id}`).then(({ data }) => {
            setCountry(data)
        })
        .finally(() => setLoading(false))
    },[id])

    return { loading, country }
}