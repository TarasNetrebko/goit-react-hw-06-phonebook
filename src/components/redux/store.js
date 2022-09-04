import { createStore } from 'redux';
import { contactReducer } from './contacts/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({ contacts: contactReducer });

const store = createStore(contactReducer, composeWithDevTools());
export default store;
