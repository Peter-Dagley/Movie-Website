import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

// New Releases Function
const NewReleasesAPI = () => {
    const [data, setData] = useState([]);

    // API
    const getNewReleasesAPI = () => {
        axios.get("http://localhost:4000/comingsoon")
            .then((response) => {
                setData(response.data);
                console.log(response.data)
            });
    };

    useEffect(() => {
        getNewReleasesAPI()
    }, [])

    // Page Display
    return (
        <>
        {data.map(({id, title}) =>
        <div key={id} id={id} className='card'>
            <p>{title}</p> 
        </div>
         )}
        </>
    )

}

export default NewReleasesAPI;