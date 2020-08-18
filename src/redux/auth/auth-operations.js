import axios from 'axios';
import authActions from './auth-actions';

const {
    registerRequest,
    registerSuccess,
    registerError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    loginRequest,
    loginSuccess,
    loginError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} = authActions;

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  const register = credentials => dispatch => {
    dispatch(registerRequest());
    axios.post('/users/signup', credentials)
    .then(response => dispatch(registerSuccess(response.data)))
    .catch(err => dispatch(registerError(err.message)))
  };


  const login = credentials => dispatch => {
    dispatch(loginRequest());
    axios.post('/users/login', credentials)
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(err => dispatch(loginError(err.message)))

  };

  const logOut = () => dispatch => {};

  const getCurrentUser = () => (dispatch, getState) => {};

  export default {
    register,
    login,
    logOut,
    getCurrentUser

  };