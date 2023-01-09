import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
} from './ContactList.styled';

export function ContactList({ contacts, onRemoveBtn }) {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactListButtonDelete
            type="button"
            onClick={() => onRemoveBtn(contact.id)}
          >
            Delete
          </ContactListButtonDelete>
        </ContactListItem>
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveBtn: PropTypes.func.isRequired,
};
