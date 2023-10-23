import { useEffect } from 'react'
import Style from './paginate.module.css'

export default function Paginate ({currentPage, setCurrentPage, totalPages}) {
    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(totalPages)
        if (totalPages === 0) return
        else if (currentPage === 0) setCurrentPage(1)
    })
    return (
        <div className={Style.paginate}>
            {currentPage === 1 || currentPage === 0
            ? <button disabled className={Style.prev}>Prev</button> 
            : <button className={Style.prev} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>}
            <div className={Style.paginate_list}>
                <h2 className={Style.paginate_list_first}>{currentPage}</h2>
                <h2 className={Style.paginate_list_second}>{totalPages}</h2>
            </div>
            {currentPage === totalPages 
            ? <button disabled className={Style.next}>Next</button>
            : <button className={Style.next} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
        </div>
    )
}