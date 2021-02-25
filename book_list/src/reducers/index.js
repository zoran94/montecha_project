import {
    FETCH_SEARCHED_BOOK,
    DATA_LOADING,
    FETCH_BOOK_DETAILS,
    NO_RESULT_FOUND
} from "./../actions/types"

const initialState = {
    books: [],
    book: {},
    loading: false,
    foundResults: null
}


export const SearchForBooksReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SEARCHED_BOOK:
            const books = action.payload
            return {
                ...state,
                books,
                loading: false,
                foundResults: true
            }
        case NO_RESULT_FOUND:
            return {
                ...state,
                foundResults: false,
                loading: false
            }

        case FETCH_BOOK_DETAILS:
            const book = action.payload
            return {
                ...state,
                book,
                loading: false
            }
        case DATA_LOADING:
            return {
                ...state,
                loading: true,
                foundResults: null
            }
        default: {
            return state
        }
    }

}
