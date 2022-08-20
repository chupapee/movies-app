import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../widgets/Header/Header";
import { privateRoutes } from "./utils/routes";
import { publicRoutes } from "./utils/routes";
import s from "./routing.module.css";

export function Routing() {
  const loggedIn = useSelector((state) => state.auth.login);

  return (
    <BrowserRouter>
      <Header />
      <div className={s.mainWrap}>
        <Routes>
          {loggedIn ? (
            <>
              {privateRoutes.map(({ path, Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </>
          ) : (
            <>
              {publicRoutes.map(({ path, Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
