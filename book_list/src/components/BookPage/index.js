import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { showLoading } from "./../../actions/actionCreators"
import "./style.scss"



export const BookPage = () => {
    const { book } = useSelector(state => state.books)
    return (
        <>
        <div className="book-container">
        <img src={book.cover ? book.cover.large : null} />
        <div className="book-details">
            <h1>{book.title}</h1>
            <h2>by {book.authors ? book.authors.map(author => author.name): null}</h2>
            <p>Num of pages: {book.number_of_pages ? book.number_of_pages : "no pages found"}</p>
            <p>First published: {book.publish_date ? book.publish_date : "no date found"}</p>
            <p>Publishers: {book.publishers ? book.publishers.map(publisher => publisher.name) : "no publisher found"}</p>
            {/* <p>Subjects: </p> */}
            {/* <ul>{book.subjects ? book.subjects.map(subject => <li>{subject.name}</li>) : "no subjects found"}</ul> */}
        </div>
        </div>
        </>
    )
}