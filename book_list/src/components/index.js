import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"

import InputSearch from "./Input/index"
import SearchedResults from "./HomePage/index"
import { BookPage } from "./BookPage/index"

export const MainPage = () => {
    const [bookSelected, setBookSelected] = useState(false)
    const { books, loading } = useSelector(state => state.books)


    return (
        <>
            <div className="home-page" style={{ "backgroundSize": "100% 100%" }}>
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