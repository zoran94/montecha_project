import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import InputSearch from "./input"
import SearchedResults from "./../../components/HomePage/SearchedResults"

export const HomePage = () => {
    
    const dispatch = useDispatch()
    const { books, loading } = useSelector(state => state.books)

    return (
        <>
        <div className="home-page" style={books.length ? {"backgroundSize": "100% 300px"} : {"backgroundSize": "100% 100%"} }>
        <div className="search-field">

            <InputSearch />
        </div>
            {books.length && loading === false ? 
            <SearchedResults /> 
            : null}

       </div>
        </>
    )
}