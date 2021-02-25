import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"

import InputSearch from "./HomePage/input"
import SearchedResults from "./HomePage/index"
import { BookPage } from "./BookPage/index"

export const MainPage = () => {
    const [bookSelected, setBookSelected] = useState(false)

    const dispatch = useDispatch()
    const { books, book, loading } = useSelector(state => state.books)


    return (
        <>
        <div className="home-page" style={ {"backgroundSize": "100% 100%"}  }>
        <div className="search-field">
            <InputSearch bookSelected={bookSelected} setBookSelected={setBookSelected} />
        </div>
            
            <Switch>
           <Route exact path="/"> {books.length && loading === false ? 
            <SearchedResults setBookSelected={setBookSelected} /> 
            : null}
            </Route>
            <Route path="/bookpage" >{loading === false ? <BookPage /> : null}</Route>
            </Switch>
            
       </div>
        </>
    )
}