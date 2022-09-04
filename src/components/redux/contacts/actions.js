import { ADD_CONTACT, DELETE_CONTACT, CHANGE_CONTACTS } from './action-types';

export const addContact = contact => {
  return { type: ADD_CONTACT, payload: contact };
};

export const deleteContact = id => {
  return { type: DELETE_CONTACT, payload: id };
};

export const changeContacts = contacts => {
  return { type: CHANGE_CONTACTS, payload: contacts };
};
