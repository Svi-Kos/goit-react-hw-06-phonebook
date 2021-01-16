import * as actionTypes from 'redux/types';
import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});
