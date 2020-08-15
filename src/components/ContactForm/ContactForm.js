import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

import {contactSelectors, contactOperations} from '../../redux/contacts';

const {getContacts} = contactSelectors;


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    createIdName = uuidv4();
    createIdNumber = uuidv4();

    saveContact = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    submitContact = e => {
        const { contacts } = this.props;

        e.preventDefault();

        const isCorrectInput =
            this.state.name.length !== 0 && this.state.number.length !== 0;

        if (!isCorrectInput) {
            alert('One or more fields is full');
            return;
        }

        const isNewContactDublicate = contacts.some(
            contact => contact.name === this.state.name.trim(),
        );

        if (isNewContactDublicate) {
            alert(`${this.state.name.trim()} is alredy in contacts`);
            return;
        }

        this.props.onSubmit(this.state);
        this.reset();
        localStorage.removeItem('not save contact');
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.submitContact}>
                <label className={s.label} htmlFor={this.createIdName}>
                    <div className={s.head__field}>Name</div>
                    <input
                        type="text"
                        name="name"
                        className={s.input}
                        value={this.state.name}
                        onChange={this.saveContact}
                        id={this.createIdName}
                    />
                </label>

                <label className={s.label} htmlFor={this.createIdNumber}>
                    <div className={s.head__field}>Number</div>
                    <input
                        type="tel"
                        name="number"
                        className={s.input}
                        value={this.state.number}
                        onChange={this.saveContact}
                        id={this.createIdNumber}
                    />
                </label>
                <Button type="submit">
                    Add contact
                </Button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: newContact => dispatch(contactOperations.addContact(newContact)),
});

const mapStateToProps = state => {
    return {
        contacts: getContacts(state),
    };
};

ContactForm.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
