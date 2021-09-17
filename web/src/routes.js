//Maisa 210904: Arquivo para criação das rotas

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignUpForm from './components/accountBox/signupForm';
import { LoginForm } from './components/accountBox/loginForm';
import OfficeBooking from './components/booking/officeBooking';
import BookingSaoPaulo from './components/booking/saoPauloBooking';
import BookingSantos from './components/booking/santosBooking';
import UserForm from './components/booking/userData';
import ConfirmInformation from './components/booking/booking';
import ShowInformation from './components/booking/bookingInformation';
import OfficePage from './pages/OfficePage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={OfficePage} />
                <Route exact path='/saopaulobooking' component={BookingSaoPaulo} />
                <Route exact path='/santosbooking' component={BookingSantos} />
                <Route exact path='/user/:office&:date&:time' component={UserForm} />
                <Route exact path='/user/booking/:office&:date&:time&:name&:lastName&:email' component={ConfirmInformation} />
                <Route exact path='/user/booking/bookinginformation' component={ShowInformation} />
               
            </Switch>
        </BrowserRouter>
    );
}
