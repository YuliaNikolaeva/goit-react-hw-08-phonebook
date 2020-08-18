import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import s from '../Navigation.module.css';

import authSelectors from '../../redux/auth/auth-selectors';

const {getUserName} = authSelectors;




const UserMenu = ({name}) => (
  <div className={s.nav}>
    <span>Welcome, {name}</span>
    <Button type="button" >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
})

export default connect(mapStateToProps)(UserMenu);
