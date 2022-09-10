import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactList from './ElementContact/ElementContact';
import Filter from './SearchContact/SearchContact';
import ContactForm from './FormContact/FormContact';

import styles from './app.module.css';

import { getContacts, addContacts, deleteContacts } from 'redux/items/items-operations';
import { fetchContacts, getState } from 'redux/items/items-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-action';

const App = () => {

  const contacts = useSelector(fetchContacts);
  const filter = useSelector(getFilter);
  const { loading, error } = useSelector(getState);

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getContacts())
}, [dispatch]);

  const onAddContact = data => {
    const action = addContacts(data);
    dispatch(action)
  }

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
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
        <div className={styles.form}>
          <h1 className={styles.title}>Добавить контакт</h1>
          <ContactForm onSubmit={onAddContact} />
        </div>

        <div className={styles.contacts}>
          <h2 className={styles.title}>Книга контактов</h2>
          <Filter value={filter}
          onChange={event => dispatch(setFilter(event.currentTarget.value))} />
          {error && <p className={styles.error}>Не удалось загрузить контакты! </p>}
          {loading ? <p className={styles.loading}>...Loading</p> : <ContactList  contacts={filtredArray} deleteContact={onDeleteContact}/>}
          
        </div>
      </div>     
    )
};

export default App;

