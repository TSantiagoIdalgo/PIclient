export const useFilterByContinent = (country, setCountries, e) => {
    const filtered = country.filter((c) => {
        return c.continent.includes(e.target.value)
    })
    setCountries(filtered)
}

export const usefilterByAlphabetically = (countries, setCountries, e) => {
    if (e.target.value == 'downward') {
        const downward = countries.sort((a, b) => {
                if (a.name > b.name) return -1
                if (a.name < b.name) return 1
                return 0
            })
            setCountries(downward)
        } else if (e.target.value == 'upward') {
            const upward = countries.sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            })
            setCountries(upward)
        }
}

export const usefilterByPopulation = (countries, setCountries, e) => {
    if (e.target.value == 'downward') {
        const downward = countries.sort((a, b) => {
            return a.population - b.population
        })
        setCountries(downward)
    } else if (e.target.value == 'upward') {
        const upward = countries.sort((a, b) => {
            return b.population - a.population
        })
        setCountries(upward)
    }
}