import React, { useEffect, useState } from "react";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";



const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);

        },1500);
    },[]); 

    return (

        <>
        {" "}
        {isLoading ? ( 
            <div className="cards">
                {" "}
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={250} duration={2} />
                </SkeletonTheme>
            </div>
        )}

        </>
    )

    

};

export default Cards;