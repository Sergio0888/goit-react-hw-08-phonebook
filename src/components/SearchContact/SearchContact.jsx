import PropTypes from 'prop-types';
import styles from './searchcontact.module.css';



const Filter = ({value, onChange}) => {

    return (
        <div className={styles.box}>
            <p className={styles.text}>Find contacts by name</p>
            <input 
            type="text"
            value={value}
            onChange={onChange}
            />
        </div>
    )
}
       
export default Filter;

Filter.propTypes = {
    onChange : PropTypes.func.isRequired,
    value: PropTypes.string,
};