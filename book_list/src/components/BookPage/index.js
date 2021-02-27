import React from 'react';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import "./style.scss"



export const BookPage = () => {
    const { book } = useSelector(state => state.books)
    return (
        <>
            <div className="book-container">
                <div className="cont-image">
                    <img src={book.cover ? book.cover.large : null} />
                    <Link to="/"><button>back to books page</button></Link>
                </div>
                <div className="book-details">
                    <h1>{book.title}</h1>
                    <h2>by {book.authors ? book.authors.map(author => author.name) : null}</h2>
                    <p>Number of pages: {book.number_of_pages ? book.number_of_pages : "no pages found"}</p>
                    <p>First published: {book.publish_date ? book.publish_date : "no date found"}</p>
                    <p>Publishers: {book.publishers ? book.publishers.map(publisher => publisher.name) : "no publisher found"}</p>
                </div>
            </div>
        </>
    )
}