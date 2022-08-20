import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImg, setLogin } from "../../redux/slices.js/authSlice";
import s from "./style.module.css";
import { BackBtn } from '../../shared/buttons/components/BackBtn'

export const Profile = () => {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const defaultImg = useSelector((state) => state.auth.img);

  const [disabled, setDisabled] = useState(true);
  function handleChanging() {
    setDisabled(!disabled);
  }

  useEffect(() => {
    loginRef.current.focus();
  }, [disabled]);

  function handleSaving() {
    dispatch(setLogin(loginValue));
    setDisabled(true);
    dispatch(setImg(image));
  }

  const [loginValue, setLoginValue] = useState(login);
  function changeLogin(value) {
    setLoginValue(value);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      setDisabled(true);
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
        <BackBtn />
        <div className={s.profileWrap}>
          <div className={s.contentWrap}>
            <div className={s.imgWrap}>
              <img src={image} alt="profile_icon" />
              <label className={s.btn}>
                <input
                  style={{ display: "none" }}
                  id="imgInput"
                  onChange={handleFileChange}
                  type={"file"}
                />
                select image
              </label>
            </div>
            <div className={s.loginForm}>
              <label className={s.loginInp}>
                Login
                <input
                  className={s.loginInp}
                  id="loginInp"
                  onKeyDown={handleKeyDown}
                  ref={loginRef}
                  required
                  onChange={(e) => changeLogin(e.target.value)}
                  type="text"
                  value={loginValue}
                  disabled={disabled}
                />
              </label>
              <div className={s.btnsWrap}>
                <button className={s.btn} onClick={handleChanging}>
                  Edit
                </button>
                <button className={s.btn} onClick={handleSaving}>
                  save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
