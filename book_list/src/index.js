import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import  thunk from "redux-thunk" 
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { SearchForBooksReducer } from "./reducers/index"

const rootReducer = combineReducers({books: SearchForBooksReducer})

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, {},  composeEnhancers(applyMiddleware(thunk), compose));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();