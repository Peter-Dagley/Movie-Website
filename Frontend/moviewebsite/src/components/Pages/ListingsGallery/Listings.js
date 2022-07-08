import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./ListingsGalleryStyles.css";

// Will need to add containers and columns for image position, atm doesn't look great
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


    // Page Display
    if(search==="") {
        return (
            <>
            <div className='container'>
            <input id='searchMovies' placeholder='Search for a movie...' onChange={(e) => getMovie(e.target.value)}/><br></br>
                {data.map(({id, title, starring, genre, rating, thumbnail}) =>
                    <div key={id} id={id} className='card'>
                        <div>
                            <div className="movie-title">
                                {title}
                            </div>
                        </div>
                        <div className='card-content'>
                            <div className='content'>
                                <p>Starring: {starring}</p>
                            </div>
                            <div className='content'>
                                <p>Genre: {genre}</p>
                            </div>
                            <div className='content'>
                                <p>Rating: {rating}</p>
                            </div>
                            <div className='content'>
                                <img className='image1' src={`${thumbnail}`} alt="poster"></img>
                            </div>
                        </div> 
                    </div>
                )} 
            </div>
            </>
        )
        } else {
            return (
                <>
                <div className='container' id='header'>
                    <input id='searchMovies' placeholder='Search for a movie...' onChange={(e) => getMovie(e.target.value)}/>
                        {search.map(({id, title, starring, genre, rating, thumbnail}) =>
                            <div key={id} id={id} className='card'>
                                <div className='card-header'>
                                    <div className='card-header-title'>
                                        <p>{id} {title}</p>
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <div className='content'>
                                        <p>Starring: {starring}</p>
                                    </div>
                                    <div className='content'>
                                        <p>Genre: {genre}</p>
                                    </div>
                                    <div className='content'>
                                        <p>Rating: {rating}</p>
                                    </div>
                                    <div className='content'>
                                        <img className='image1' src={`${thumbnail}`} alt="poster"></img>
                                    </div>
                                </div> 
                            </div>
                        )}
                </div>
                </>
            )

    }
}

export default Listings