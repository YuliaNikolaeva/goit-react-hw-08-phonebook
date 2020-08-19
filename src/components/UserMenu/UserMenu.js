import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import s from '../Navigation.module.css';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const {getUserName} = authSelectors;
const {logOut} = authOperations;

const UserMenu = ({name, makeLogOut}) => (
  <div className={s.nav}>
    <span>Welcome, {name}</span>
    <Button 
      type="button" 
      onClick={makeLogOut}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
})

const mapDispatchToProps = dispatch => ({
  makeLogOut: () => dispatch(logOut()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);