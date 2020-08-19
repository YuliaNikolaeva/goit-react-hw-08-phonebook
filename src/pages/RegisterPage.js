import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import { Button } from 'react-bootstrap';
import s from './RegisterPage.module.css';
import Container from '../components/Container';

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
            <Container title="Registration page">
              <form
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
              >
                <label
                  className={s.label}
                  autoComplete="off"
                >Name
                    <input
                      className={s.input} 
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      value={name}
                    >
                    </input>
                </label>
  
                <label
                  className={s.label}
                >Email
                    <input
                      className={s.input} 
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      value={email}
                    >
                    </input>
                </label>
  
                <label
                  className={s.label}
                  autoComplete="off"
                >Passs
                    <input
                      className={s.input} 
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    >
                    </input>
                </label>
                <Button type="submit">Registration me</Button>
              </form>
            </Container>
          );
    }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data) => dispatch(register(data))
})


export default connect(null, mapDispatchToProps)(RegisterPage);