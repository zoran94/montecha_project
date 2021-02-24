import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { showLoading } from "./../../actions/actionCreators"
import "./style.scss"



export const BookPage = () => {
    const dispatch = useDispatch()
    const { book } = useSelector(state => state.books)

    console.log(book)
  
    return (
        <>
        <div className="book-container">
        <img src={book.cover.large} />

        </div>
        </>
    )
}