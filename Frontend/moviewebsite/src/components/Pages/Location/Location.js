import axios from 'axios';
import { useState, useEffect } from 'react';
import './LocationStyles.css'

const Location = () => {

  const [locations, setLocations] = useState([])
  const [id, setId] = useState()
  const [page, setPage] = useState('cities')

  const getLocations = () => 
  {
    axios.get("http://localhost:4000/locationlist")
        .then((response) => {
            setLocations(response.data)
        })
  }

  useEffect(() => 
  {
      getLocations()
  }, [])

  let html = ''

  switch (page)
  {
    case 'city' : 
            let city = ''
            let movies = ''

            locations.forEach
            (location =>
              {
                if (location.id === id)
                {
                  city = location.city
                  movies = location.movies
                }
              }
            )

            html = <div align="center">
              <div className="location-city-title">{city}</div>
              
              <div>
                <input type="text" className="location-movie" value="showing now" readonly></input>
                <input type="text" className="location-times" value="times" readonly></input>
              </div>
              {movies.map
                ((movie) =>
                  <div>
                    <input type="text" className="location-movie" value={movie.title} readonly></input>
                    <input type="text" className="location-times" value={movie.times.join('   ')} readonly></input>
                  </div>
                )
              }
              
              <br></br><button className='location-button' onClick={() => setPage('cities')}>back</button>
            </div>
            break
    case 'cities'    : html = <div className="location-city-title" align="center">locations
            <div className="location-page">
            {locations.map
              ((location) =>
                  <div><button className='location-city-list' onClick={() => {setPage('city'); setId(location.id)}}>{location.city}</button></div>
              )
            }
            </div>
            </div>
            break
    default: html = <div>this is a divvvvvvvv</div>
  }

  return  (
            <>
                {html}
            </>
          )
}

export default Location