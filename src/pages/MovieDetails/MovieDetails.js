import { useSelector } from "react-redux"
import s from './movieDetails.module.css'
import { Preloader } from "../../widgets/Preloader/Preloader";
import { BackBtn } from "../../shared/buttons/components/BackBtn";

export function MovieDetails() {

  // whole movie info
  const data = useSelector(state => state.movies.movieDetails)
  const isLoading = useSelector(state => state.movies.isLoading)

  return (
    <>
      <BackBtn />
      { isLoading ? <Preloader />
      :<div className={s.mainInfo}> 
        <div className={s.movieDetailsPosterWrap}>
          {data.Poster && <img className={s.movieDetailsPoster} src={data.Poster} alt="moviePoster" />}
        </div>
        <div className={s.movieDetailsInfo}>
          <div className={s.moviePreDetails}>
            <h1 className={s.movieDetailsTitle}>{data.Title}</h1>
            <div className={s.subInfo}>
              {data.Year && <div>{data.Year}</div>}
              {data.Rated && <div>{data.Rated}</div>}
              {data.DVD && <div>{data.DVD}</div>}
              {data.Runtime && <div>{data.Runtime}</div>}
            </div>
            {data.Plot && 
              <div className={s.moviePlot}>
                <p>{data.Plot}</p>
              </div>
            }
            
          </div>
          <div className={s.movieMoreDetails}>
            {data.Genre && <div>Genre : {data.Genre}</div>}
            {data.Director && <div>Director : {data.Director}</div>}
            {data.Actors && <div>Actors : {data.Actors}</div>}
            {data.Country && <div>Country : {data.Country}</div>}
            {data.Awards && <div>Awards : {data.Awards}</div>}
          </div>
        </div>
      </div>
      }
    </>
  )
}