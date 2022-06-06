import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { Header } from "../../widgets/Header/Header"
import './movieDetails.css'

export function MovieDetails() {

  // whole movie info
  const info = useSelector(state => state.movies.movieDetails)
  console.log(info);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <img className="poster" src={info.Poster} alt="moviePoster" />
        <div className="details">
        <div>Title: {info.Title}</div>
        <div>Release date: {info.Year}</div>
        <div>More info: <span style={{cursor: 'pointer', color: 'blue', fontStyle: 'italic'}}>https://www.imdb.com/title/{info.imdbID}</span></div>
        <button style={{width: '100px'}}>favorites</button>
        <button style={{width: '100px'}}>favorites</button>
        </div>
        <NavLink className='backBtn' to='/'>return back</NavLink>
      </div>
    </div>
  )
}