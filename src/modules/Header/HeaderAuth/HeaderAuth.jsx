import { NavLink } from 'react-router-dom';
import { items } from './items';
import s from '../HeaderMenu/header-menu.module.scss';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.linkActive : s.link;
};

const HeaderAuth = () => {
  const elements = items.map(({ id, to, text }) => (
    <li className={s.item} key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default HeaderAuth
