import s from './style.module.css'

export const Poster = ({posterPic}) => {
  return (
    <div>
      <img className={s.movieDetailsPoster} src={posterPic} alt="moviePoster" />
    </div>
  );
}
