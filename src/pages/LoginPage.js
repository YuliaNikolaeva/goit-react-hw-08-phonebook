import React, { Component } from 'react';
import { connect }  from 'react-redux';

import authOperations from '../redux/auth/auth-operations';

const {login} = authOperations;


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value})
      };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({name: '', email: '', password: ''})
    };
    

    render() {
        const {email, password} = this.state;

        return (
            <>
                <h2>Страница авторизации</h2>
                <form
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    >
                    <label>
                        Почта
                        <input 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Пароль
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Войти</button>
                </form>
            </>
            
        );
    }
 }


 const mapDispatchToProps = dispatch => ({
     onLogin: (credentials) => dispatch(login(credentials)),
 })

 
export default connect(null, mapDispatchToProps)(LoginPage);