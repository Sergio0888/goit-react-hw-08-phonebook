import HeaderAuth from './HeaderAuth/HeaderAuth';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import UserMenu from './UserMenu/UserMenu';
import useIsLogin from 'shared/hooks/useIsLogin';
import s from './header.module.css'

const Header = () => {
  const isLogin = useIsLogin();

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <HeaderMenu />
          {isLogin ? <UserMenu /> : <HeaderAuth />}
        </div>
      </div>
    </header>
  );
};

export default Header;
