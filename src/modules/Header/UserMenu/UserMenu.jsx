import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';
import s from './user-menu.module.scss'

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
    <div className={s.container}>
      <p className={s.text}>{name}</p>
      <Button size='small' variant="contained" type="submit" onClick={handleClick}>
      Log out
      </Button>
    </div>

      </>
  );
};

export default UserMenu;
