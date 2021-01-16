// import React, { useState, useEffect } from 'react';
// import shortid from 'shortid';
// import './App.css';
// import ContactList from './components/ContactList';
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';
// // import contacts from 'contacts.json';

// function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   const addContact = (name, number) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const uniqName = contacts.filter(contact => name === contact.name);
//     uniqName.length !== 1
//       ? setContacts([contact, ...contacts])
//       : alert(`${name} is already in contacts`);
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="phonebook">
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={visibleContacts} onDeleteItem={deleteContact} />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
// import contacts from 'contacts.json';

function App() {
  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
