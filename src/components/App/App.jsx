import React, { useState } from 'react';
import { PhonebookForm } from '../PhonebookForm/PhonebookForm';
import { PhonebookList } from '../PhonebookList/PhonebookList';
import { useSelector } from 'react-redux';
// import { changeContacts } from 'components/redux/contacts/actions';
import { getContacts } from 'components/redux/contacts/selector';
import { ContentContainer } from './App.styled';
import { Filter } from '../Filter/Filter';

export const App = () => {
  // const [isFirstMount, setIsFirstMount] = useState(true);
  const [filter, setFilter] = useState("");
  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isFirstMount) {
  //     localStorage.getItem('contacts') !== null
  //     && dispatch(changeContacts(JSON.parse(localStorage.getItem('contacts'))))
  //     setIsFirstMount(false);
  //   } else {
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  //   }
  //   // eslint-disable-next-line
  // }, [contacts])

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

    const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return (contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter))
    }
      
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <ContentContainer>
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <PhonebookList
            contacts={filteredContacts}
          />
        </ContentContainer>
      </div>
    );
  }
