import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

interface UserProps {
  name: string,
  path: string,
}

interface NavigationProps {
  items: UserProps[],
}

const Navigation: React.FC<NavigationProps> = ({ items = [] }): JSX.Element => (
  <ul className={style.nav}>
    {items.map(item => (
      <li key={item.name}>
        <NavLink to={item.path} className={style.link} activeClassName={style.activeLink}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);


export default Navigation;
