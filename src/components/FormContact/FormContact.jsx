import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './formcontact.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(
          {name: e.target.name.value,
          number: e.target.number.value}
        );
        this.setState(prevState => this.props.onSubmit(prevState));
        return this.setState({
          name: '',
          number: ''
        });
      }

    render() {
        return (
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor="">Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={styles.label} htmlFor="">Number</label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={styles.btn} type='submit'>Add contact</button>
        </form>
    )
}
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};