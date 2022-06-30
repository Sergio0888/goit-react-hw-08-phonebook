import styles from './elementcontact.module.css';
import PropTypes from 'prop-types';


const ContactList = ({contacts, removeContact}) => {

    const elements = contacts.map(({name,number, id}) => {
      return (
        <li className={styles.item} key={id}>
          <p className={styles.name}>{name}: {number}</p>
          <button type="button" className={styles.btn}
                onClick={() => removeContact(id)}>Delete</button>
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
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired
}