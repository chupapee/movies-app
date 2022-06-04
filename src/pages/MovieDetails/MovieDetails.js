import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { Preloader } from '../../widgets/Preloader/Preloader'

export function MovieDetails() {

  const info = useSelector(state => state.movies.movieDetails)

  return (
    <div className="wrapper">
      <Preloader />
      <NavLink to='/'>click</NavLink>
      <img src={info.Poster} alt="" />
    </div>
  )
}
