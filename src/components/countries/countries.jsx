import { useSearchCountries, usePaginate } from '../../hooks/countries/countries'
import { UsefetchCountries } from '../../services/countries/countries'
import { useHandle } from '../../hooks/commonHooks/useHandle' 
import Paginate from './paginate/paginate'
import CardCountry from './card/card'
import Filter from './filter/filter'
import Style from './countries.module.css'

export default function Countries ({ search }) {
    const { state, changeState } = useHandle()
    const { countries } = UsefetchCountries()
    const { totalCountries, setCountries } = useSearchCountries(search, countries)
    const { firstIndex, lastIndex, currentPage, totalPages, setCurrentPage } = usePaginate(totalCountries)
    return (
        <div>
            <div className={Style.filter}>
                <button onClick={changeState}>Filter</button>
                {state ? <Filter country={countries} countries={totalCountries} setCountries={setCountries}/> 
                : null}
            </div>
            <main className={Style.background}>
            {totalCountries?.map((c) => (
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