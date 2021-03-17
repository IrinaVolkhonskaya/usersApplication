import React from "react";
import Navigation from '../Navigation/Navigation';
import navItems from "../configs/nav";
import style from './AppHeader.module.css'


export default function AppHeader() {
  return (
    <div className={style.header} as="h3">
      <Navigation items={navItems} />
    </div>
  );
}
