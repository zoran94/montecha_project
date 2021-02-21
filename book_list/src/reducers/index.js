import { FETCH_SEARCHED_BOOK } from "./../actions/types"

const initialState = {
    books: [],
    loading: false
}


export const SearchForBooksReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FETCH_SEARCHED_BOOK: 
        const books = action.payload
        return {
            ...state,
            books
        }
        default: {
        return state
    }
    } 
        
}
