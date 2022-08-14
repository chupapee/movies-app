import { useSelector } from "react-redux";
import s from "./style.module.css";

export const Home = () => {
  const login = useSelector((state) => state.auth.login);

  return (
    <>
      <div className={s.wrap}>
        <div className={s.personalInfo}>
          <div className={s.photoWrap}>
            <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="photo" />
          </div>
          <div className={s.info}>
            <p>login</p>
            <p>email</p>
          </div>
        </div>
      </div>
      <div>favoritemovies</div>
      <div>achievements</div>
    </>
  );
};
