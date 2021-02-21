import axios from "axios"
import { FETCH_SEARCHED_BOOK } from "./types"




const fetchSearchedBooks = (books) => {
    return {
        type: FETCH_SEARCHED_BOOK,
        payload: books
    }
}


export const fetchSearchedBooksSucces = (value)  => {
    console.log("testiranje 1 2 3", value)
     return dispatch => {
            axios.get(`http://openlibrary.org/search.json?q=${value}`)
            .then(response => {
                console.log(response)
                dispatch(fetchSearchedBooks(response.data))
            })
            .catch(error => console.log(error))
        }
    // try {
        // const data = await axios.get(`http://openlibrary.org/search.json?q=${value}`)
        // console.log(data)
        // dispatch(fetchSearchedBooks())
    //    return dispatch => {
    //         axios.get(`http://openlibrary.org/search.json?q=${value}`)
    //         .then(response => {
    //             console.log(response)
    //             dispatch(fetchSearchedBooks(response.data))
    //         })
    //         .catch(error => console.log(error))
    //     }
    // } catch(error) {
    //     console.log(error)
    // }
}
