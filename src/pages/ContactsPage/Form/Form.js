import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts-operations';
import { Box, TextField, Button } from '@mui/material';

import s from './form.module.css';

const Form = () => {
  const [user, setUser] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewContact(user));

    setUser({
      name: '',
      number: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={s.div}>
          <TextField
            id="name"
            label="Name"
            value={user.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
          <TextField
            id="phone"
            label="Phone"
            value={user.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </div>
          <Button sx={{ ml: 8, mt: 2 }} size="medium" variant="contained" type="submit">
            Add contact
          </Button>
      </Box>
    </>
  );
};

export default Form;
