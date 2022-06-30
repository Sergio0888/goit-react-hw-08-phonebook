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
        this.props.onSubmit({ ...this.state });
        this.setState({
          name: '',
          number: ''
        });
      }

      handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
          [name]: value,
        });
      }


    render() {

      const { name, number } = this.state;

        return (
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor="">Name</label>
          <input
            onChange={this.handleChange}
            className={styles.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={styles.label} htmlFor="">Number</label>
          <input
            onChange={this.handleChange}
            className={styles.input}
            value={number}
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