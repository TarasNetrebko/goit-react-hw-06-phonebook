import { ADD_CONTACT, CHANGE_CONTACTS, DELETE_CONTACT } from './action-types';

export const contactReducer = (
  state = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  { type, payload }
) => {
  switch (type) {
    case ADD_CONTACT:
      console.log(payload);
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    case CHANGE_CONTACTS:
      return payload;
    default:
      return state;
  }
};
