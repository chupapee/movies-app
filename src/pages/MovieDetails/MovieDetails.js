import { useSelector } from "react-redux";
import s from "./movieDetails.module.css";
import { Preloader } from "../../widgets/Preloader/Preloader";
import { BackBtn } from "../../shared/buttons/components/BackBtn";
import { Poster } from "../../widgets/MovieDetails/Poster/index";
import { Description } from "../../widgets/MovieDetails/Description/index";

export function MovieDetails() {
  // whole movie info
  const data = useSelector((state) => state.movies.movieDetails);
  const isLoading = useSelector((state) => state.movies.isLoading);

  return (
    <>
      <BackBtn />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className={s.mainInfo}>
            {data.Poster && <Poster posterPic={data.Poster} />}
            <Description {...data} />
          </div>
        </>
      )}
    </>
  );
}
