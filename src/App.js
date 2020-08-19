import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authOperations from './redux/auth/auth-operations';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar';


const {getCurrentUser} =authOperations;

class App extends Component {

    componentDidMount() {
        this.props.getUser();
    }

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

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);