import React from 'react';
import { NavLink} from 'react-router-dom';

import style from './Navigation.module.css';
// type NavigationType = {
//   items: [],
//   name: string,
//   path: string,
// }

const Navigation = ({ items = [] } ) => (
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
