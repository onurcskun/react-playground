import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import App from './App'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>  
            <Route exact path="/LoginForm" component={LoginForm}/>
            <Route exact path="/RegisterForm" component={RegisterForm}/>
            <Route exact path="/App" component={App}/>
        </Switch>
    </BrowserRouter>
);

export default Routes