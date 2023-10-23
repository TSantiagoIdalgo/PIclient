import { useState, useEffect } from "react"

export const useSearchCountries = (search, countries) => {
    const [totalCountries, setCountries] = useState([])
    useEffect(() => {
        const countriesSearched = countries.filter((c) => {
            const name = search.toLowerCase()
            return c.name.toLowerCase().includes(name)
        })
        setCountries(countriesSearched)
    },[search, countries])

    return { totalCountries, setCountries }
}

export const usePaginate = (totalCountries) => {
    const [currentPage, setCurrentPage] = useState(1)
    const countriesPerPage = 10
    const totalPages = Math.ceil(totalCountries.length / 10)
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage

    return { firstIndex, lastIndex, currentPage, totalPages, setCurrentPage }
}