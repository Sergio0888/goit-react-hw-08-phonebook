import styles from './elementcontact.module.css';
import PropTypes from 'prop-types';


const ContactList = ({contacts, deleteContact}) => {

    const elements = contacts.map(({name, phone, id}) => {
      return (
        <li className={styles.item} key={id}>
          <p className={styles.text}>Имя: {name} </p>
          <p className={styles.text}>Телефон: {phone}</p>
          <button type="button" className={styles.btn}
                onClick={() => deleteContact(id)}>X</button>
        </li>
        )
    });

    return (
      <ul>
          {elements}
      </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  deleteContact: PropTypes.func.isRequired
}