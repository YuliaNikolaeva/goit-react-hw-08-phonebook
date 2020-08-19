import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import authOperations from './redux/auth/auth-operations';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar';


const {getCurrentUser} = authOperations;

class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <>
                <AppBar />
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/" 
                        component={HomePage} 
                    />
                    <PublicRoute 
                        path="/register" 
                        component={RegisterPage}
                        restricted
                        redirectTo="/contacts"
                    />
                    <PublicRoute 
                        path="/login" 
                        component={LoginPage}
                        restricted
                        redirectTo="/contacts"
                    />
                    <PrivateRoute 
                        path="/contacts" 
                        component={ContactsPage}
                        redirectTo="/login"
                    />
                </Switch>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);