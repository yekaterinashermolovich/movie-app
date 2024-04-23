import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../Card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type, setYearFilter, setRatingFilter]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        let filteredMovies = data.results;
        if(yearFilter) {
          filteredMovies = filteredMovies.filter((movie) => new Date(movie.release_date).getFullYear()===parseInt(setYearFilter)) /*esli cto pomenayem na drugoy filter */
        };
        if(ratingFilter) {
          filteredMovies = filteredMovies.filter((movie) => movie.vote_average >= parseFloat(ratingFilter));
        }
        setMovieList(filteredMovies);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;