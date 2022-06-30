import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Listings = () => {
        const [data, setData] = useState([]);

        // API
        const getListings = () => {
            axios.get("http://localhost:4000/movielist")
                .then((response) => {
                    setData(response.data);
                    console.log(response.data)
                });
        };

        // Deconstructing Data Object
        const {id, title} = data;

        useEffect(() => {
            getListings()
        }, [])

        // Page Display
        return (
            <>
            {data.map(({id, title}) =>
            <div key={id} id={id} className='card'>
                <p>{id} {title}</p> 
            </div>
            )}
            </>
        )

}


export default Listings