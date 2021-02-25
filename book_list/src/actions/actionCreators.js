import axios from "axios"
import {
    FETCH_SEARCHED_BOOK,
    FETCH_BOOK_DETAILS,
    DATA_LOADING,
    NO_RESULT_FOUND
} from "./types"




const noResultsFound = () => {
    return {
        type: NO_RESULT_FOUND
    }
}



const fetchSearchedBooks = (books) => {
    return {
        type: FETCH_SEARCHED_BOOK,
        payload: books
    }
}

const fetchBookDetails = (book) => {
    return {
        type: FETCH_BOOK_DETAILS,
        payload: book
    }
}



const dataLoading = () => {
    return {
        type: DATA_LOADING
    }
}

export const showLoading = () => async dispatch => {
    try {
        dispatch(dataLoading())
    } catch (err) {
        console.error(err)
    }
}

export const fetchBookDetailSuccess = (details) => async dispatch => {
    console.log("provera")
    try {
        const isbnum = `ISBN:${details[0]}`
        const { data } = await axios.get(`https://openlibrary.org/api/books?bibkeys=${isbnum}&jscmd=data&format=json`)
        dispatch(fetchBookDetails(data[isbnum]))
    } catch (error) {
        console.log(error)
    }
}

export const fetchSearchedBooksSucces = (value) => {
    return dispatch => {
        axios.get(`http://openlibrary.org/search.json?title=${value}`)
            .then(response => {
                console.log(response.data)
                if (response.data.docs.length === 0) {
                    dispatch(noResultsFound())
                } else {
                    dispatch(fetchSearchedBooks(response.data.docs))

                }
            })
            .catch(error => console.log(error))
    }
}