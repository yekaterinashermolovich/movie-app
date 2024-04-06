import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const [currentMovieDetail, setMovieDetail] = useState();

  const { id } = useParams();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      /* `d1152af9757a55d135e39e8e140015f6` to check the key */
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  return (
    <div className="movie">
      <div className="movie__enter">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie-detail">
        <div className="movie-detail-info">
          <div className="movie-poster-container">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie-detail-data">
            <div className="movie-name">
               {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie-slogan">
               {currentMovieDetail ? currentMovieDetail.tagline : ""} 
            </div>
            <div className="movie-rating">
               {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                <i class="fas fa-star" />
                
            </div>
        </div>
      </div>
    </div>
  );
};
