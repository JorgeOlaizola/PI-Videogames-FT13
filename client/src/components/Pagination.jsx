import React, {} from 'react'
import './styles/Pagination.css'

export default function Pagination({ cardPerPage, totalCards, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage ); i++){
        pageNumbers.push(i);
    }
    return (
        <div className="pagpos">
            <ul>
                {pageNumbers && pageNumbers.map(p => <li><button onClick={() => paginate(p)}>{p}</button></li>)}
            </ul>
        </div>
    )
}
