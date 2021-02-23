import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import ReactPaginate from 'react-paginate'
import style from "./style.scss"



const SearchedResults = () => {
         const [currentPage, setCurrentPage] = useState(1)
         const [booksPerPage, setBooksPerPage] = useState(5)

    const { books } = useSelector(state => state.books)
    
    console.log(books)

    const newCurrentPage = num => {
        if(num === 0) {
            num = 1
        }
       
        setCurrentPage(num)
    }

    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage 
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
    const totalBooks = books.length

    const pageNumbers = []
    for (let i = 0; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i)
    }
    console.log(pageNumbers)

    return  (
        <>
            <div className="books-container" style={books.length ? {height: "1000px"} : null}>

               <div className="books-cnt" style={books.length ? {padding: "25px"} : null }>
               {books.length > 0 && currentBooks.map(book => (
                    <>
                    <div className="book-container">
                        
                        {book.isbn ? <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg?default=false`} /> 
                        : <h2>No picture</h2>}
                        <div className="books-information">
                            <h2>{book.author_name ? `by ${book.author_name[0]}` : "No author found"}</h2>
                            <span>First published in {book.first_publish_year}</span>
                            <span className="editions">Editions {book.edition_count}</span>
                        </div>
                    </div>
                    </>
                ))}
                <ReactPaginate 
                previousLabel={'Prev'}
                nextLabel={'Next'}
                containerClassName={"paginate-container"}
                pageClassName={"listitem"}
                pageLinkClassName={"link"}
                activeClassName={"active"}
                pageCount={pageNumbers.length}
                onPageChange={(e) => newCurrentPage(e.selected)}
                />
               </div>
                

            </div>


        </>
    )

}


export default SearchedResults