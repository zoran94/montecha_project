import { FETCH_SEARCHED_BOOK, DATA_LOADING } from "./../actions/types"

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
            books,
            loading: false
        }
        case DATA_LOADING:
            return {
                ...state,
                loading:true
            }
        default: {
        return state
    }
    } 
        
}
