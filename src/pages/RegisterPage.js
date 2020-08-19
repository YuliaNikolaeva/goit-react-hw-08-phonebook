import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const {register} = authOperations;


class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
      };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})

  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({name: '', email: '', password: ''})
  };

    render () {
      const {name, email, password} =this.state;

        return (
            <>
              <h2>Страница регистрации</h2>
              <form
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
              >
                <label
                  autoComplete="off"
                >Имя
                    <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                    >
                    </input>
                </label>
  
                <label

                >Почта
                    <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    >
                    </input>
                </label>
  
                <label
                  autoComplete="off"
                >Пароль
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    >
                    </input>
                </label>
                <button type="submit">Зарегистрироваться</button>
              </form>
            </>
          );
    }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data) => dispatch(register(data))
})


export default connect(null, mapDispatchToProps)(RegisterPage);