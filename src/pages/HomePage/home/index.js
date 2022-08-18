import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../redux/slices.js/authSlice";
import s from "./style.module.css";

export const Home = () => {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(true)
  function handleChanging() {
    setDisabled(false)
  }

  function handleSaving(){
    dispatch(setLogin(loginValue))
    setDisabled(true)
  }
  
  const [loginValue, setLoginValue] = useState(login)
  function changeLogin(value) {
    setLoginValue(value)

  }

  return (
    <>
      <div>
        <input required onChange={e => changeLogin(e.target.value)} type="text" value={loginValue} disabled={disabled} />
        <button onClick={handleChanging}>change</button>
        <button onClick={handleSaving}>save</button>
      </div>
    </>
  );
};
