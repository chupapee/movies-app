import { useSelector } from "react-redux"
import s from './movieDetails.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Preloader } from "../../widgets/Preloader/Preloader";
import { useNavigate } from "react-router-dom";

export function MovieDetails() {

  // whole movie info
  const data = useSelector(state => state.movies.movieDetails)
  const isLoading = useSelector(state => state.movies.isLoading)
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <>
      <button onClick={goBack} className={s.backBtn}>
        <ArrowBackIosNewIcon className={s.backIcon} />
      </button>
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