import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from "react-router-dom"
import { MainPage } from "./components/index"
import { BookPage } from "./components/BookPage/index"

function App() {
  return (
    <div className="App">
    <Router>
    <MainPage />
    </Router>
    </div>
  );
}

export default App;
