import './App.css';
import {BrowserRouter as Router } from "react-router-dom"
import { MainPage } from "./components/index"

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
