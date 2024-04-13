import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Cards from "../Card/Card";
import { type } from "@testing-library/user-event/dist/type";
import { useParams } from "react-router-dom";



const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

  useEffect(() => {
    getData(); 
  }, []); 

  useEffect(() => {
    getData(); 
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key= d1152af9757a55d135e39e8e140015f6&language=en-US`
     
    )
      .then((res) => res.json()) 
      .then((data) => setMovieList(data.results)); 
  };

    return (

        <div className="movie__list">
            <h3 className="list__title">
                {(type ? type: "popular").toUpperCase()}
            </h3>
            <div className="list__cards">
            {movieList.map((movie) => (
          <Cards movie={movie} />
        ))};
            </div>
        </div>
    );

    

};

export default MovieList;