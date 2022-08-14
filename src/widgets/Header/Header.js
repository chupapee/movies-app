import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import { getNavlist } from "./nav";

export function Header() {
  const login =
    useSelector((state) => state.auth.login) || localStorage.getItem("login");

  const navList = getNavlist(login);

  return (
    <div className={s.header}>
      <img
        className={s.headerIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        alt="imdbIcon"
      />
      <nav className={s.nav}>
        <ul className={s.navList}>
          {navList.map(({ value, path }) => (
            <li key={value}>
              <NavLink className={s.navItem} to={path}>
                {value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
