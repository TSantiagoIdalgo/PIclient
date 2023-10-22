import Style from './searchbar.module.css'

export default function SearchBar ({ search, setSearch }) {

    function inputChange (e) {
        setSearch(e.target.value)
      }
    
    return (
        <form autoComplete='off' onSubmit={(e) => { e.preventDefault() }} className={Style.form}>
            <input type="search" id="search" placeholder='Search for a country' className={Style.search} name='search' value={search} onChange={inputChange}/>
        </form>
    )
}