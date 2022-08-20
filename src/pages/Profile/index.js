import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg, setLogin } from "../../redux/slices.js/authSlice";
import s from "./style.module.css";

export const Profile = () => {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const defaultImg = useSelector(state => state.auth.img)

  const [disabled, setDisabled] = useState(true);
  function handleChanging() {
    setDisabled(false);
  }

  useEffect(() => {
    loginRef.current.focus();
  }, [disabled]);

  function handleSaving() {
    dispatch(setLogin(loginValue));
    setDisabled(true);
    dispatch(setImg(image))
  }

  const [loginValue, setLoginValue] = useState(login);
  function changeLogin(value) {
    setLoginValue(value);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      setDisabled(true)
    }
  }

  const [image, setImage] = useState(defaultImg);

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }

  return (
    <>
      <div className={s.wrap}>
        <div className={s.imgWrap}>
          <img src={image} />
          <input
            name="profileImg"
            onChange={handleFileChange}
            type={"file"}
          />
        </div>
        <div className={s.loginForm}>
          <input
            onKeyDown={handleKeyDown}
            ref={loginRef}
            className={s.loginInp}
            required
            onChange={(e) => changeLogin(e.target.value)}
            type="text"
            value={loginValue}
            disabled={disabled}
          />
          <button onClick={handleChanging}>change</button>
        </div>
        <button onClick={handleSaving}>save</button>
      </div>
    </>
  );
};
