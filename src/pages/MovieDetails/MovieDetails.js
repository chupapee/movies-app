import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { Header } from "../../widgets/Header/Header"
import './movieDetails.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function MovieDetails() {

  // whole movie info
  const data = useSelector(state => state.movies.movieDetails)
  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <NavLink className='backBtn' to='/'>
        <ArrowBackIosNewIcon classname='backIcon' />
      </NavLink>
      <div className="mainInfo">
        <div className="movieDetailsPosterWrap">
          <img className="movieDetailsPoster" src={data.Poster} alt="moviePoster" />
        </div>
        <div className="movieDetailsInfo">
          <div className="moviePreDetails">
            <h1 className="movieDetailsTitle">{data.Title}</h1>
            <div className="subInfo">
              <div>{data.Year}</div>
              <div>{data.Rated}</div>
              <div>{data.DVD}</div>
              <div>{data.Runtime}</div>
            </div>
            <div className="moviePlot">
              <p>{data.Plot}</p>
            </div>
          </div>
          <div className="movieMoreDetails">
            <div>Genre : {data.Genre}</div>
            <div>Director : {data.Director}</div>
            <div>Actors : {data.Actors}</div>
            <div>Country : {data.Country}</div>
            <div>Awards : {data.Awards}</div>
          </div>
        </div>
      </div>
    </div>
  )
}