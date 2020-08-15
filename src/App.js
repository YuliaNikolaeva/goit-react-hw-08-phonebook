import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar';



class App extends Component {

    render() {
        return (
            <>
                <AppBar />
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/contacts" component={ContactsPage} />
            </Switch>
            </>
        );
    }
}



export default App;