import styles from './app.module.css'
import { useState, useEffect } from 'react';
import ContactList from './ElementContact/ElementContact';
import Filter from './SearchContact/SearchContact';
import ContactForm from './FormContact/FormContact';
import { nanoid } from 'nanoid';

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem("contacts"));
    return value || [];
});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
    const searchName = contacts.map(({name}) => name);
    
    if (searchName.includes(name)) {
      return alert(`${name} is already in contacts`);
        }

    const id = nanoid();
    const newContact = {name, number, id};
    
    setContacts(prevContacts => {
      return [...prevContacts, newContact]
    });
  };

  const removeContact = (id) => {
    setContacts(contacts.filter(item => item.id !== id))
  };

  const filterContacts = (value) => {
    setFilter(value)
  };

  const handleChange = ({target}) => {
    const {value} = target;
    filterContacts(value);
  };

  const getSearchContacts = () => {

    if (filter === '') {
      return contacts
    }
    const filterValue = filter.toLowerCase();
    const filtredContacts = contacts.filter(({name}) => {
      const nameValue = name.toLowerCase();
     return nameValue.includes(filterValue);
    });
    console.log(filtredContacts);
    return filtredContacts;
  };

  const contactsArr = getSearchContacts();

return (
      <div className={styles.box}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter searchInput={handleChange} />
        <ContactList  contacts={contactsArr} removeContact={removeContact}/>
      </div>
    )
};

export default App;