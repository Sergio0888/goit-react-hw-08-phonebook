import styles from './app.module.css';
// import { useState, useEffect } from 'react';
import ContactList from './ElementContact/ElementContact';
import Filter from './SearchContact/SearchContact';
import ContactForm from './FormContact/FormContact';
// import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContacts } from 'redux/items/items-action';
import { getContacts } from 'redux/items/items-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-actions';

const App = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = ({name,number}) => {
    const action = addContacts(name,number);
    const arrayOfName = contacts.map(contact => contact.name);
    if (arrayOfName.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(action);
  };

  const onRemoveContact = (contact_id) => {
    dispatch(removeContacts(contact_id));
  }

  const getFiltredContacts = () => {

    const normalizeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  };

  const filtredArray = getFiltredContacts();
  

return (
      <div className={styles.box}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter}
          onChange={event => dispatch(setFilter(event.currentTarget.value))} />
        <ContactList  contacts={filtredArray} removeContact={onRemoveContact}/>
      </div>
    )
};

export default App;

  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem("contacts"));
  //   return value || [];
  // });
  // const [filter, setFilter] = useState('');


  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);


  // const addContact = ({ name, number }) => {
  //   const searchName = contacts.map(({name}) => name);
    
  //   if (searchName.includes(name)) {
  //     return alert(`${name} is already in contacts`);
  //       }

  //   const id = nanoid();
  //   const newContact = {name, number, id};
    
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact]
  //   });
  // };

  // const removeContact = (id) => {
  //   setContacts(contacts.filter(item => item.id !== id))
  // };

  // const filterContacts = (value) => {
  //   setFilter(value)
  // };

  // const handleChange = ({target}) => {
  //   const {value} = target;
  //   filterContacts(value);
  // };

  // const getSearchContacts = () => {

  //   if (filter === '') {
  //     return contacts
  //   }
  //   const filterValue = filter.toLowerCase();
  //   const filtredContacts = contacts.filter(({name}) => {
  //     const nameValue = name.toLowerCase();
  //    return nameValue.includes(filterValue);
  //   });
  //   console.log(filtredContacts);
  //   return filtredContacts;
  // };

  // const contactsArr = getSearchContacts();
