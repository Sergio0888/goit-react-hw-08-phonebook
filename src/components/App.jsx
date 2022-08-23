import styles from './app.module.css'
import { Component } from 'react';
import ContactList from './ElementContact/ElementContact';
import Filter from './SearchContact/SearchContact';
import ContactForm from './FormContact/FormContact';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    
    if(contacts?.length) {
        this.setState({
          contacts
        })
    }
  };
  
  componentDidUpdate(_, prevState) {
    const {contacts} = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  };
  
  addContact = ({ name, number }) => {
    const searchName = this.state.contacts.map(({name}) => name);
    
    if (searchName.includes(name)) {
      return alert(`${name} is already in contacts`);
        }
        const id = nanoid();
        const newContact = {name, number, id};
    
       return this.setState({
          name: name,
          number: number,
          contacts: [...this.state.contacts, newContact]
        })
  }

  removeContact = (id) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id)
      }
    })
  };

  filterContacts = (value) => {
    this.setState({
      filter: value
    })
  };

  handleChange = ({target}) => {
    const {value} = target;
    this.filterContacts(value);
  };


  getSearchContacts() {
    const {contacts, filter} = this.state;
    if (filter === '') {
      return contacts
    }
    const filterValue = filter.toLowerCase();
    const filtredContacts = contacts.filter(({name}) => {
      const nameValue = name.toLowerCase();
     return nameValue.includes(filterValue);
    });
    return filtredContacts;
  };


  render() {

    const contactsArr = this.getSearchContacts();

    return (
      <div className={styles.box}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter searchInput={this.handleChange} />
        <ContactList  contacts={contactsArr} removeContact={this.removeContact}/>
      </div>

    )
  }};

export default App;