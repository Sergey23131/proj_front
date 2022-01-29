import './App.css';
import {
    BrowserRouter as Router,
} from "react-router-dom"

import {MainList} from "./components/MainList/MainList";

export function App() {
    return (
        <Router>
            <div className="App">
                <MainList/>
            </div>
        </Router>
    );
}

