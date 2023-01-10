import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import useLocalStorage from './hooks/UseLocalStorage';

const CONTACTS_LOCAL_STORAGE = 'contacts';

export default function PhoneBoock() {
  const [contacts, setContacts] = useLocalStorage(CONTACTS_LOCAL_STORAGE, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleSubmit = contact => {
    const newContact = { ...contact, id: nanoid() };
    const isContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isContact) {
      alert(`${contact.name} is already in contacts`);
    } else {
      setContacts(prevState => {
        return [...prevState, newContact];
      });
    }
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const onRemoveBtn = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const applyFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    const visivleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visivleContact;
  };

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
        <ContactForm onHandleSubmit={handleSubmit} />
        <ContactFilter value={filter} onChange={changeFilter} />
        {contacts.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
        {contacts.length > 0 && (
          <ContactList contacts={applyFilter()} onRemoveBtn={onRemoveBtn} />
        )}
      </Box>
    </div>
  );
}
