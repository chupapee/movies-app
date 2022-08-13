import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../widgets/Header/Header";
import s from "./routing.module.css";
import { privateRoutes } from "./utils/routes";
import { publicRoutes } from "./utils/routes";

export function Routing() {
  const loggedIn = localStorage.getItem("email");
  return (
    <BrowserRouter>
      <Header />
      <div className={s.mainWrap}>
        <Routes>
          {loggedIn ? (
            <>
              {privateRoutes.map(({ path, Component }) => (
                <>
                  <Route path={path} element={<Component />} key={path} />
                </>
              ))}
            </>
          ) : (
            <>
              {publicRoutes.map(({ path, Component }) => (
                <>
                  <Route path={path} element={<Component />} key={path} />
                </>
              ))}
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
