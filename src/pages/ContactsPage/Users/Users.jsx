import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts-operations';
import { filter } from 'redux/contacts/contacts-slice';
import { getfilteredUsers } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { TextField, Button } from '@mui/material';

import s from './users.module.css';

const Users = () => {
  const users = useSelector(getfilteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onRemoveUser = id => dispatch(removeContact(id));
  const onHandleFilter = e => dispatch(filter(e.target.value));

  const elements = users.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}{' '}
      <Button
        sx={{ ml: 2}}
        size="small"
        variant="contained"
        onClick={() => onRemoveUser(id)}
      >
        Delete
      </Button>
    </li>
  ));

  return (
    <>
      <TextField
        id="phone"
        label="Enter the name"
        type="text"
        name="filter"
        onChange={onHandleFilter}
      />
      <ul>{elements}</ul>
    </>
  );
};

export default Users;
