import React, { Component } from 'react';

import {
  ContactFormWrapper,
  ContactFormText,
  ContactFormField,
  ContactFormButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormWrapper onSubmit={this.handleSubmit}>
        <ContactFormText htmlFor="">
          Name
          <ContactFormField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactFormText>
        <ContactFormText htmlFor="">
          Number
          <ContactFormField
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactFormText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrapper>
    );
  }
}

export default ContactForm;
