import { useParams } from "react-router-dom";
import { useGetCountry } from "../../../services/countries/country";
import Loading from '../../../assets/icon/loading/loading.gif'
import Style from './country.module.css'

export default function Country () {
    const { id } = useParams()
    const { loading, country } = useGetCountry(id)
    return (
      <div className={Style.background}>
        <figure className={Style.country}>
        {loading 
        ? <img src={Loading} width={50} height={50} className={Style.country_loading}/> 
        : <div className={Style.country_text}>
            <img className={Style.country_img} src={country.image} alt={country.name} />
            <h1>{country.name}</h1>
            <h2>Capital: {country.capital}</h2>
            <h2>Continent: {country.continent}</h2>
            <h3>Subregion: {country.subregion}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Area: {country.area}</h3>
            <a href={country.map} className={Style.country_map} rel="noreferrer" target="_blank">Google Maps</a>
          </div>}
        </figure>
      </div>
    )
}