import { Navigate, Outlet } from 'react-router-dom';
import useIsLogin from 'shared/hooks/useIsLogin';

const PublicRoute = () => {
  const isLogin = useIsLogin();

  if (isLogin) {
    <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
