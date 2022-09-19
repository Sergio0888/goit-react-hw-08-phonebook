import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Button, TextField } from '@mui/material';
import s from './login-form.module.scss'

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login(user));

    setUser({
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
          helperText="Enter your email"
          id="email"
          label="Email"
          onChange={handleChange}
          type="text"
          name="email"
          value={user.email}
          placeholder="email"
          required
        />
      </label>
      <label>
        <TextField
        sx={{ mb: 2 }}
        size="small"
          helperText="Enter your password"
          id="password"
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          required
        />
      </label>
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
