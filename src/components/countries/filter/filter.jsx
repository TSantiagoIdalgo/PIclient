import Style from './filter.module.css'

export default function Filter ({ country, countries, setCountries }) {

    function filterByContinent (e) {
        const filtered = country.filter((c) => {
            return c.continent.includes(e.target.value )
        })
        setCountries(filtered)
    }

    function filterByAlphabetically (e) {
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

    function filterByPopulation (e) {
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

    return (
        <div className={Style.background}>
            <h1>Filter by:</h1>
            <select name='contient' onChange={filterByContinent}>
                <option value="">Continent</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Antarctica">Antarctica</option>
            </select>
            <select name='alphabetically' onChange={filterByAlphabetically}>
                <option value="">Alphabetically</option>
                <option value="upward">Upward</option>
                <option value="downward">Downward</option>
            </select>
            <select name="population" onChange={filterByPopulation}>
                <option value="">Population</option>
                <option value="upward">Upward</option>
                <option value="downward">Downward</option>
            </select>
        </div>
    )
}