import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getAllCountries } from '../../redux/actions/actions'
import Paginate from './paginate/paginate'
import CardCountry from './card/card'
import Filter from './filter/filter'
import Style from './countries.module.css'

export default function Countries ({ search }) {
    const dispatch = useDispatch()
    const [countries, setCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, handleFilter] = useState(false)
    const country = useSelector(state => state.countries)
    const countriesPerPage = 10
    const totalPages = Math.ceil(countries.length / 10)
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage

    useEffect(() => {
        dispatch(getAllCountries())
    }, [])
    useEffect(() => {
        const countriesSearched = country.filter((c) => {
            const name = search.toLowerCase()
            return c.name.toLowerCase().includes(name)
        })
        setCountries(countriesSearched)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])
    
    return (
        <div>
            <div className={Style.filter}>
                <button onClick={() => {filter ? handleFilter(false) : handleFilter(true)}}>Filter</button>
                {filter ? <Filter country={country} countries={countries} setCountries={setCountries}/> 
                : null}
            </div>
            <main className={Style.background}>
            {countries?.map((c) => (
                <CardCountry key={c.id} props={c}/>
            )).slice(firstIndex, lastIndex)}
            </main>
            <Paginate 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}/>
        </div>
    )
}