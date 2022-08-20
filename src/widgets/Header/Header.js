import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import { getNavlist } from "./nav";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import { useState } from "react";

export function Header() {
  const profileIcon = useSelector((state) => state.auth.img);
  const login =
    useSelector((state) => state.auth.login) || localStorage.getItem("login");

  const navList = getNavlist(login);

  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef(null);
  function openNav() {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    if (isOpened) {
      navRef.current.className = `${s.navList} ${s.showNav}`;
    } else {
      navRef.current.className = s.navList;
    }
  }, [isOpened])

  function handleNavClick() {
    openNav();
  }

  return (
    <div className={s.header}>
      <div className={s.headerIcon}>
        <img src={profileIcon} alt="profile-icon" />
      </div>
      <div>
        <div onClick={openNav} className={s.burger}>
          <MenuIcon />
        </div>
        <nav onClick={handleNavClick} ref={navRef} className={s.navList}>
          {navList.map(({ value, path }) => (
            <NavLink className={s.navItem} to={path}>
              {value}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
