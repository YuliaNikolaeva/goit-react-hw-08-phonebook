import React from 'react';
import { connect } from 'react-redux';
import s from './Navigation.module.css';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import authSelectors from '../redux/auth/auth-selectors';

const {getIsAuthenticated} = authSelectors;


const AppBar = ({isAuthenticated}) => (
    <div className={s.pageWrapper}>
        <header>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    </div>

);

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state),
});


export default connect(mapStateToProps)(AppBar);