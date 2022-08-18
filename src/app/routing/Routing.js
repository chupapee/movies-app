import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkEmail } from "../../redux/slices.js/authSlice";
import { Header } from "../../widgets/Header/Header";
import s from "./routing.module.css";
import { privateRoutes } from "./utils/routes";
import { publicRoutes } from "./utils/routes";

export function Routing() {
  const loggedIn = useSelector(state => state.auth.login)
  const dispatch = useDispatch()

  useEffect(() => {
    const email = localStorage.getItem('email')
    const login = localStorage.getItem('login')
    dispatch(checkEmail([email, login]))
  }, [])
  
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
