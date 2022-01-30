import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import {MainList} from "./components/MainList/MainList";
import {LoginForm} from "./components/LoginForm/LoginForm";

export function App() {
    return (
        <Router>
            <div className="App">
                <Switch>

                    <Route path={"/Login"} render={(props) =>{
                        return <LoginForm {...props}/>}}/>

                    <Route exact path={'/MainList'} component={MainList}/>
                    <Redirect exact to="/MainList"/>
                </Switch>

            </div>
        </Router>
    );
}

