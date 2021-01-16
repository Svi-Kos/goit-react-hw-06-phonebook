import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'redux/actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteItem }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.contactListItem}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => onDeleteItem(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteItem: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
