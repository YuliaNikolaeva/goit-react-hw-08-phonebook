import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav className={s.nav}>
        <NavLink to="/" >Главная</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
    </nav>

);

export default Navigation;