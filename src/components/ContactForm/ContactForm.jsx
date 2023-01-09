import { useState } from 'react';

import {
  ContactFormWrapper,
  ContactFormText,
  ContactFormField,
  ContactFormButton,
} from './ContactForm.styled';

export default function ContactForm({ onHandleSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onHandleSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormText htmlFor="">
        Name
        <ContactFormField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormText>
      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </ContactFormWrapper>
  );
}
