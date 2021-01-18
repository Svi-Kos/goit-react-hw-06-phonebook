import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as actionTypes from 'redux/types';
import * as actions from 'redux/actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const uniqName = state.filter(contact => payload.name === contact.name);
    return uniqName.length !== 1
      ? [...state, payload]
      : [...state] && alert(`${payload.name} is already in contacts`);
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

// const itemsReducer = (
//   state = testContacts,
//   { type, payload },
// ) => {
//   switch (type) {
//     case actionTypes.ADD:
//       console.log('addContact');
//       const uniqName = state.filter(contact => payload.name === contact.name);
//       return uniqName.length !== 1 ? [...state, payload] : [...state];

//     case actionTypes.DELETE:
//       console.log('deleteContact');
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       console.log('changeFilter');
//       return payload;

//     default:
//       return state;
//   }
// };
