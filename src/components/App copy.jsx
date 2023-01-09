import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

const CONTACTS_LOCAL_STORAGE = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = contact => {
    const newContact = { ...contact, id: nanoid() };
    const isContact = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (isContact) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onRemoveBtn = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  applyFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visivleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visivleContact;
  };

  componentDidMount() {
    const contacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE);
    const jsonParseContacts = JSON.parse(contacts);
    if (jsonParseContacts?.length) {
      this.setState({ contacts: jsonParseContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        CONTACTS_LOCAL_STORAGE,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <Box
          p={30}
          bg="secondary"
          border="2px solid"
          borderColor="border"
          borderRadius={8}
        >
          <ContactFormTitle>PhoneBook</ContactFormTitle>
          <ContactForm onHandleSubmit={this.handleSubmit} />
          <ContactFilter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
          {contacts.length > 0 && (
            <ContactList
              contacts={this.applyFilter()}
              onRemoveBtn={this.onRemoveBtn}
            />
          )}
        </Box>
      </div>
    );
  }
}
