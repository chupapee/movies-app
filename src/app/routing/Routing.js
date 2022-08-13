import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { MovieDetails } from "../../pages/MovieDetails/MovieDetails";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Header } from "../../widgets/Header/Header";
import { Quiz } from "../../pages/QuizPage/Quiz";
import s from "./routing.module.css";

export function Routing() {
  const link = useSelector((state) => state.movies.movieDetails.imdbID);
  const URL = `/${link}`;
  const loggedIn = localStorage.getItem("email");
  return (
    <BrowserRouter>
      <Header />
      <div className={s.mainWrap}>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/*" element={<HomePage />} />
              <Route path="/movies_app/quiz" element={<Quiz />} />
              <Route path={URL} element={<MovieDetails />} />
            </>
          ) : (
            <Route path="/*" element={<HomePage />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
