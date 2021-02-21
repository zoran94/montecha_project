import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import debounce from "lodash.debounce"

import "./style.scss"
import { fetchSearchedBooksSucces } from "./../../actions/actionCreators"



 const InputSearch = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)

    const debouncedValue = useCallback(debounce((value) =>  dispatch(fetchSearchedBooksSucces(value)), 1000),
    [])
    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
        debouncedValue()
        
    }
    //console.log(value)
    console.log(books)

    
   const handleSubmit = (event) => {
       event.preventDefault()
       console.log("proba")
       dispatch(fetchSearchedBooksSucces(value))
   }
  
    return (
        <>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={value}
                    type="text"/>
                <button type="submit" >submit</button>
                </form>
            </div>
        </>
    )
}




export default InputSearch