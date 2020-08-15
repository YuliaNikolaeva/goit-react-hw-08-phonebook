import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const AuthNav = () => (
  <div className={s.nav}>
    <NavLink
      to="/register"
      exact
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
    >
      Авторизация
    </NavLink>
  </div>
);

export default AuthNav;