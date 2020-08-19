import React from 'react';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import { connect } from 'react-redux';
import s from './Navigation.module.css';

const {getIsAuthenticated} = authSelectors;

const Navigation = ({isAuthenticated}) => (
    <nav className={s.nav}>
        <NavLink to="/" >Главная</NavLink>

        {isAuthenticated && 
            <NavLink to="/contacts">Контакты</NavLink>
        }
    </nav>

);

const mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state),
});


export default connect(mapStateToProps)(Navigation);