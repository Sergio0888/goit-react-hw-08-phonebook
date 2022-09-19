import LoginForm from 'modules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import useIsLogin from 'shared/hooks/useIsLogin';

const LoginPage = () => {
  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <main>
      <div className="container">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
