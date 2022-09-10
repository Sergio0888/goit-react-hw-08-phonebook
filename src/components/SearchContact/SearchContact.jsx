import PropTypes from 'prop-types';
import styles from './searchcontact.module.css';



const Filter = ({value, onChange}) => {

    return (
        <div className={styles.box}>
            <p className={styles.text}>Найти по имени</p>
            <input 
            className={styles.input}
            type="text"
            placeholder=' Введите имя для поиска'
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