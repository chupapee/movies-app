import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import { getNavlist } from "./nav";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import { useState } from "react";

export function Header() {
  const login =
    useSelector((state) => state.auth.login) || localStorage.getItem("login");

  const navList = getNavlist(login);

  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef(null);
  function openNav() {
    setIsOpened(!isOpened);
    if (isOpened) {
      navRef.current.className = `${s.navList} ${s.showNav}`;
    } else {
      navRef.current.className = s.navList;
    }
  }

  return (
    <div className={s.header}>
      <img
        className={s.headerIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        alt="imdbIcon"
      />
      <div onClick={openNav} className={s.burger}>
        <MenuIcon />
      </div>
      <nav ref={navRef} className={s.navList}>
        {navList.map(({ value, path }) => (
          <NavLink className={s.navItem} to={path}>
            {value}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
