import React from 'react';
import {connect} from 'react-redux';
import s from './UserMenu.module.css';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const {getUserName} = authSelectors;
const {logOut} = authOperations;

const UserMenu = ({name, makeLogOut}) => (
  <>
    <div className={s.welcomeBox}>
      <div className={s.welcomeText}>Welcome,</div>
      <div className={s.welcomeName}>{name}</div>
    </div>
    <button 
      className={s.btnLogout}
      type="button" 
      onClick={makeLogOut}
    >
      Logout
    </button>
  </>
);

const mapStateToProps = state => ({
  name: getUserName(state),
})

const mapDispatchToProps = dispatch => ({
  makeLogOut: () => dispatch(logOut()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);