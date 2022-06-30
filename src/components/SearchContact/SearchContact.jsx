import PropTypes from 'prop-types';
import styles from './searchcontact.module.css';



const Filter = ({searchInput}) => {

    return (
        <div className={styles.box}>
            <p className={styles.text}>Find contacts by name</p>
            <input 
            type="text"
            onChange={searchInput}
            />
        </div>
    )
}
       
export default Filter;

Filter.propTypes = {
    searchInput : PropTypes.func.isRequired
  };