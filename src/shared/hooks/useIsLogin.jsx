import { useSelector } from 'react-redux';
import { getIsLoging } from 'redux/auth/auth-selectors';

const useIsLogin = () => {
  const login = useSelector(getIsLoging);
  return login;
};

export default useIsLogin;
