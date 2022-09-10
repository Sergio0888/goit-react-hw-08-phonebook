import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './formcontact.module.css';

const ContactForm = ({onSubmit}) => {

  const [state, setState] = useState({
      name: '',
      number: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(state);
    setState({
      name: '',
      number: ''
    })
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
        ...state,
        [name]: value
    })
  };

  const { name, number } = state;

        return (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="">Имя</label>
          <input
            onChange={handleChange}
            className={styles.input}
            value={name}
            type="text"
            name="name"
            placeholder='Введите имя'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={styles.label} htmlFor="">Номер телефона</label>
          <input
            onChange={handleChange}
            className={styles.input}
            value={number}
            type="tel"
            name="number"
            placeholder='Введите номер'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={styles.btn} type='submit'>Добавить</button>
        </form>
    )

    
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};