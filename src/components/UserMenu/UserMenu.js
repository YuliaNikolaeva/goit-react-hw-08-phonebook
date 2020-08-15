import React from 'react';
import { Button } from 'react-bootstrap';
import s from '../Navigation.module.css';




const UserMenu = () => (
  <div className={s.nav}>
    {/* <img  alt="" width="32" /> */}
    <span>Welcome</span>
    <Button type="button" >
      Logout
    </Button>
  </div>
);

export default UserMenu;
