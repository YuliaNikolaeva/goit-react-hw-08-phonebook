import React, { Component } from 'react';

class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
      };
      
    render () {
        return (
            <>
              <h2>Страница регистрации</h2>
              <form>
                <label
                  autoComplete="off"
                >Имя
                    <input
                    type="text"
                    name="name"
                    >
                    </input>
                </label>
  
                <label
                  autoComplete="off"
                >Почта
                    <input
                    type="email"
                    name="email"
                    >
                    </input>
                </label>
  
                <label
                  autoComplete="off"
                >Пароль
                    <input
                    type="password"
                    name="password"
                    >
                    </input>
                </label>
                <button type="submit">Зарегистрироваться</button>
              </form>
            </>
          );
    }
}

export default RegisterPage;