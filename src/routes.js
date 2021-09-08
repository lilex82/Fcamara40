//Maisa 210904: Arquivo para criação das rotas

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignUpForm from './components/accountBox/signupForm';
import { LoginForm } from './components/accountBox/loginForm';
import OfficeBooking from './components/booking/agendamentoEscritorio';
import AgendamentoSantos from './components/booking/agendamentoSantos';
import AgendamentoSaoPaulo from './components/booking/agendamentoSaoPaulo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/signup' component={SignUpForm} />
                <Route exact path='/officebooking' component={OfficeBooking} />
                <Route exact path='/saopaulobooking' component={AgendamentoSaoPaulo} />
                <Route exact path='/santosbooking' component={AgendamentoSantos} />
            </Switch>
        </BrowserRouter>
    );
}
