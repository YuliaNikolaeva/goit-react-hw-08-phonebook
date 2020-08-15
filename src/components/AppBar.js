import React from 'react';
import s from './Navigation.module.css';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';


const AppBar = () => (
    <div className={s.pageWrapper}>
        <header>
            <Navigation />
            <AuthNav />
            <UserMenu />
        </header>
    </div>

);


export default AppBar;