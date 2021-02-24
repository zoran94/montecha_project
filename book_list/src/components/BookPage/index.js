import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"

import { showLoading } from "./../../actions/actionCreators"
import "./style.scss"



export const BookPage = () => {
    const dispatch = useDispatch()
    const { book } = useSelector(state => state.books)

    //const { data } = book
    // if(!data) {
    //     return <h1>wait</h1>
    // } else {
    //     console.log(data.title)
    // }
    console.log(book)
    //console.log(data)
    return (
        <>
        <div className="book-container">
        <h1></h1>

        </div>
        </>
    )
}