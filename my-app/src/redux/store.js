import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionTypes from 'redux/types';

const itemsReducer = (
  state = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  { type, payload },
) => {
  switch (type) {
    case actionTypes.ADD:
      console.log('addContact');
      const uniqName = state.filter(contact => payload.name === contact.name);
      return uniqName.length !== 1 ? [...state, payload] : [...state];

    case actionTypes.DELETE:
      console.log('deleteContact');
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      console.log('changeFilter');
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
//alert(`${payload.name} is already in contacts`);
