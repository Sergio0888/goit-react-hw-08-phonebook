import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { Navigate } from 'react-router-dom';
import useIsLogin from 'shared/hooks/useIsLogin';

const RegisterPage = () => {
  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <main>
      <div className="container">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
