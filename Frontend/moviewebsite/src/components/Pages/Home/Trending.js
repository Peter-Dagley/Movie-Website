import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

// Trendng Function
const Trending = () => {
    const [data, setData] = useState([]);

    // Coming Soon
    const getComingSoon = () => {
        axios.get("http://localhost:4000/comingsoon")
            .then((response) => {
                setData(response.data);
                console.log(response.data)
            });
    };

    // Deconstructing Data Object
    const {id, title} = data;

    useEffect(() => {
        getComingSoon()
    }, [])

    // Page Display
    return (
        <>
        {data.map(({id, title}) =>
        <div id={id} className='card'>
            <p>{id} {title}</p> 
        </div>
         )}
        </>
    )

}

export default Trending;