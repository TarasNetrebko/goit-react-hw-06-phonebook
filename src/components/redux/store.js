import { createStore, combineReducers } from 'redux';
import { contactReducer } from './contacts/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filterReducer } from './filter/reducer';

const contacts = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

const store = createStore(contacts, composeWithDevTools());
export default store;
