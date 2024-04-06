import React, {useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";


export const MovieDetail = () => {
    const [currentMovieDetail, setMovieDetail] = useState();

    const {id} = useParams();
    useEffect(() => {
        getData();
        window.scrollTo(0, 0);


    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
       /* `d1152af9757a55d135e39e8e140015f6` */
    }


};