import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import {MainList} from "./components/MainList/MainList";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {UserAuth} from "./components/UserAuthForm/UserAuthList";
import {UserCard} from "./components/UserCard/UserCard";
import {ForgotCard} from "./components/ForgotCard/ForgotCard";
import {PasswordCard} from "./components/SetPasswordCard/PasswordCard";

import './App.css'

export function App() {
    return (
        <Router>
            <div className="App">
                <Switch>

                    <Route path={"/Login"} render={(props) => {
                        return <LoginForm {...props}/>
                    }}/>

                    <Route path={"/auth/:id"} render={(props) => {
                        return <UserAuth {...props}/>
                    }}/>

                    <Route path={"/user/:id"} render={(props) => {
                        return <UserCard{...props}/>
                    }}/>

                    <Route path={"/forgotPassword"} render={(props) => {
                        return <ForgotCard{...props}/>
                    }}/>

                    <Route path={"/setForgotPassword"} render={(props) => {
                        return <PasswordCard{...props}/>
                    }}/>

                    <Route exact path={'/MainList'} component={MainList}/>
                    <Redirect exact to="/MainList"/>
                </Switch>

            </div>
        </Router>
    );
}

