//Maisa 210904: Arquivo para criação das rotas

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignUpForm from './components/accountBox/signupForm';
import { LoginForm } from './components/accountBox/loginForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/signup' component={SignUpForm} />
            </Switch>
        </BrowserRouter>
    )
}
