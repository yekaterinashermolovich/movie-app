import React, { useState } from "react";
/* import axios from "axious"; */
/* import "style.css"; */



const apiKey = "d1152af9757a55d135e39e8e140015f6";

export const MovieSearch = () => {

    const [searchRequest, setSearchRequest] = useState("");

    const handleInputChange = (e) => {
        setSearchRequest(e.target.value);
    }; 
    
      return (

        <form>
            <input className="input-search" type="text" placeholder="Введите название фильма" />
            <button className="btn-search" title="Найти" type="submit">Найти</button>

            
        </form>

      )

}