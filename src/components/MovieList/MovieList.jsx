import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../Card/Card";
import { type } from "@testing-library/user-event/dist/type";


const MovieList = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {

    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${
            type? type:"popular"
        }? api_key=d1152af9757a55d135e39e8e140015f6=en-US`
         .then((res) => res.json())
         .then((data) => data.results())
        )
    }

    return (

        <>

        </>
    )

    

};

export default MovieList;