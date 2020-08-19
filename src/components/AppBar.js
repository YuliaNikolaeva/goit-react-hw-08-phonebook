import React from 'react';
import { connect } from 'react-redux';
import s from './AppBar.module.css';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;


const AppBar = ({isAuthenticated}) => (
    <div className={s.appBarBox}>
        <header>
            <Navigation />
            <div className={s.secondMenuBox}>
                {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    </div>

);


const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
});


export default connect(mapStateToProps)(AppBar);
