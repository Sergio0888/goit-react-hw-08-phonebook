import { NavLink } from 'react-router-dom';
import { items } from './items';
import useIsLogin from 'shared/hooks/useIsLogin';
import s from './header-menu.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const HeaderMenu = () => {
  const isLogin = useIsLogin();
  const filteredItems = isLogin ? items : items.filter(item => !item.private);

  const elements = filteredItems.map(({ id, to, text }) => (
    <li className={s.item} key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default HeaderMenu;
