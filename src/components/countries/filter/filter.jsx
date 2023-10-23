import Style from './filter.module.css'
import { 
    useFilterByContinent, 
    usefilterByAlphabetically, 
    usefilterByPopulation } from '../../../hooks/countries/filter'

export default function Filter ({ country, countries, setCountries }) {
    return (
        <div className={Style.background}>
            <h1>Filter by:</h1>
            <select name='contient' onChange={useFilterByContinent(country, setCountries)}>
                <option value="">Continent</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Antarctica">Antarctica</option>
            </select>
            <select name='alphabetically' onChange={usefilterByAlphabetically(countries, setCountries)}>
                <option value="">Alphabetically</option>
                <option value="upward">Upward</option>
                <option value="downward">Downward</option>
            </select>
            <select name="population" onChange={usefilterByPopulation(countries, setCountries)}>
                <option value="">Population</option>
                <option value="upward">Upward</option>
                <option value="downward">Downward</option>
            </select>
        </div>
    )
}