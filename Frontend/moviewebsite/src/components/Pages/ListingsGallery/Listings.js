import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Listings = () => {
        const [data, setData] = useState([]);
        const [search, setSearch] = useState("");

        // Read All
        const getListings = () => {
            axios.get("http://localhost:4000/movielist")
                .then((response) => {
                    setData(response.data);
                    console.log(response.data)
                });
        };

        // Read One
        const getMovie = (searchInput) => {
            axios.get(`http://localhost:4000/movie/search/title/${searchInput}`)
                .then((response) => {
                    setSearch(response.data);
                    console.log(response.data)
                });
        };

        useEffect(() => {
            getListings()
        }, [])

        // Deconstructing Data Object
        const {id1, title1} = search;

    // Page Display
    if(search==="") {
        return (
            <>
            <div className='container'>
            <input id='searchMovies' placeholder='Search for a movie...' onChange={(e) => getMovie(e.target.value)}/><br></br>
                {data.map(({id, title}) =>
                        <div key={id} id={id} className='card'>
                        <p>{id} {title}</p> 
                        </div>
                        )} 
            </div>
            </>
        )
        } else {
            return (
                <>
                <div className='container' id='header'>
                    <input id='searchMovies' placeholder='Search for a movie...' onChange={(e) => getMovie(e.target.value)}/><br></br>
                    <br/>
                    {search.map(({id, title}) =>
                            <div key={id} id={id} className='card'>
                            <p>{id} {title}</p> 
                            </div>
                            )} 
                </div>
                </>
            )

    }
}

export default Listings