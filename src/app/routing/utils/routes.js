import { HomePage } from "../../../pages/HomePage/HomePage"
import { MovieDetails } from "../../../pages/MovieDetails/MovieDetails"
import { Quiz } from "../../../pages/QuizPage/Quiz"
import { Home } from '../../../pages/HomePage/home/index'
import { CONTENT_DETAILS_ROUTE, CONTENT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, QUIZ_ROUTE } from "./consts"

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: HomePage
  }
]

export const privateRoutes = [
  {
    path: CONTENT_ROUTE,
    Component: HomePage
  },
  {
    path: QUIZ_ROUTE,
    Component: Quiz
  },
  {
    path: CONTENT_DETAILS_ROUTE,
    Component: MovieDetails
  },
  {
    path: HOME_ROUTE,
    Component: Home
  }
]