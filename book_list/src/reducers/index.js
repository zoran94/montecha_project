import { FETCH_SEARCHED_BOOK, DATA_LOADING, FETCH_BOOK_DETAILS } from "./../actions/types"

const initialState = {
    books: [],
    book: {},
    loading: false
}


export const SearchForBooksReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SEARCHED_BOOK:
            const books = action.payload
            return {
                ...state,
                books,
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
                loading: true
            }
        default: {
            return state
        }
    }

}
