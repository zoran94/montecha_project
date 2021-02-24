import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import debounce from "lodash.debounce"

import "./style.scss"
import { fetchSearchedBooksSucces, showLoading } from "./../../actions/actionCreators"



 const InputSearch = ({bookSelected, setBookSelected  }) => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.books)

    const debouncedValue = useCallback(debounce((value) =>  dispatch(fetchSearchedBooksSucces(value)), 1000),
    [])
    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
        
    }
        
    const handleSubmit = (event) => {
        event.preventDefault()
        setBookSelected(false)
        dispatch(fetchSearchedBooksSucces(value))
        dispatch(showLoading())
        if(bookSelected === true) {
             window.history.back()
        }
   }

    return (
        <>
            <div>
            <h1 className="title">GreatBooks</h1>
            <form onSubmit={handleSubmit} className="form-search">
                <input
                    placeholder="search by title"
                    onChange={handleChange}
                    value={value}
                    type="text"/>
                <button type="submit" >Find books</button>
                </form>
                {loading ? <h2 className="loading-message">Searching for books...</h2> : null}
            </div>
        </>
    )
}




export default InputSearch