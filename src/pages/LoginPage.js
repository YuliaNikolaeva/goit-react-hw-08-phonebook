import React, { Component } from 'react';


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {

        return (
            <>
                <h2>Страница авторизации</h2>
                <form
                    autoComplete="off">
                    <label>
                        Почта
                        <input 
                            type="email"
                            name="email"
                        />
                    </label>

                    <label>
                        Пароль
                        <input 
                            type="password"
                            name="password"
                        />
                    </label>
                    <button type="submit">Войти</button>
                </form>
            </>
            
        );
    }
 }

export default LoginPage;