import { createAction } from '@reduxjs/toolkit';
// import * as actionTypes from 'redux/types';
import shortid from 'shortid';

export const addContact = createAction(
  'phonebook/addContact',
  (name, number) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }),
);

export const deleteContact = createAction('phonebook/deleteContact');

export const changeFilter = createAction('phonebook/changeFilter');

// export const addContact = (name, number) => ({
//   type: actionTypes.ADD,
// payload: {
//   id: shortid.generate(),
//   name,
//   number,
// },
// });

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE,
//   payload: contactId,
// });
// export const changeFilter = value => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });
