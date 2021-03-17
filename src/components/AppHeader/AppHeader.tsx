import React from "react";
import Navigation from '../Navigation/Navigation';
import navItems from "../configs/nav";
import style from './AppHeader.module.css';


export default function AppHeader(): JSX.Element {
  return (
    <div className={style.header}>
      <Navigation items={navItems} />
    </div>
  );
}
