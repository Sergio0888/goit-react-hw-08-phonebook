import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { Button, TextField } from '@mui/material';
import s from './register-form.module.scss'

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(signup(user));

    setUser({
      name: '',
      email: '',
      password: '',
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
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <TextField
        sx={{ mb: 2 }}
        size="small"
          helperText="Please enter your password"
          id="name"
          type="text"
          name="name"
          value={user.name}
          placeholder="name"
          required
          onChange={handleChange}
          />
      </label>
      <label>
        <TextField
        sx={{ mb: 2 }}
        size="small"
          helperText="Please enter your password"
          id="email"
          type="text"
          name="email"
          value={user.email}
          placeholder="email"
          required
          onChange={handleChange}
          />
      </label>
      <label>
        <TextField
        sx={{ mb: 2 }}
        size="small"
          helperText="Please enter your password"
          id="password"
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          required
          onChange={handleChange}
          />
      </label>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
