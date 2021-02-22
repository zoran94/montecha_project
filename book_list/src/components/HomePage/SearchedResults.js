import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"



const SearchedResults = () => {

    const { books } = useSelector(state => state.books)
    
    console.log(books)


    return  (
        <>
            <div className="books-container" style={books.length ? {height: "1000px"} : null}>

               <div className="books-cnt" style={books.length ? {padding: "25px"} : null }>
               {books.length > 0 && books.slice(0, 5).map(book => (
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

               </div>
                

            </div>


        </>
    )

}


export default SearchedResults