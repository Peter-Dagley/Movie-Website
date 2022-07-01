import axios from 'axios'
import { useState, useEffect } from 'react'
import './LocationStyles.css'
import LocationCity from './LocationCity.js'

const Location = () => {

  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState({})
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState('')

  let movielist = []
  let locationlist = []

  const getLocations = () => 
  {
    axios.get("http://localhost:4000/locationlist")
        .then((response) => {

            for (let i in response.data)
            {
              let loc = response.data[i]
              locationlist[loc.id] = loc
            }

            setLocations(locationlist)
        })
  }

  const getMovies = () => 
  {
    axios.get("http://localhost:4000/movielist")
        .then((response) => {
            for (let i in response.data)
            {
              let movie = response.data[i]
              
              movielist[movie.id] = movie
            }

            setMovies(movielist)
        })
  }

  useEffect(() => 
  {
      getLocations()
      getMovies()
  }, [])

  const SelectCity = (event) =>
  {
    setLocation(locations[event.target.value])
    setPage('city')
  }

  let html = ''

  switch (page)
  {
/*    case 'city' : 
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
            const formatDate = Moment().format("ddd Do MMM YYYY");
            html = <div align="center">
              <div className="location-city-title">{city}</div>
              
              {movies.map
                ((movie) =>
                  <table>
                    <tr rowspan="100%"><td><img src={'../../Images/' + movie.title + '.jpg'} alt=""></img></td></tr>
                    <tr><td><input type="text" className="location-movie" value={movie.title} readonly></input></td></tr>
                    <tr><td>Description</td></tr>
                    <tr><td>Running time</td></tr>
                    <tr><td>{formatDate}</td></tr>
                    <tr><td><input type="text" className="location-times" value={movie.times.join('   ')} readonly></input></td></tr> 
                  </table>
                )
              }
              
              <br></br><button className='location-button' onClick={() => setPage('cities')}>back</button>
            </div>
            break
    */
    case 'city'       : html = <LocationCity movies={movies} location={location} />; break;
    case 'cities'     : html = <div className="location-page" align="center"><div className="location-city-title" align="center">locations</div>
            <div className="location-list">
            {locations.map
              ((location) =>
                  <div><button className='location-city-list' onClick={() => setPage('city')}>{location.city}</button></div>
              )
            }
            </div>
            </div>
            break
    default: 
      html = ''
  }

  return  (
    <div align="center">
    <select onChange={(e) => SelectCity(e)}>
        <option value="">Please select a city</option>
        {locations.map
            ((location) =>
                (
                    <option value={location.id}>{location.city}</option>
                )
            )
        }
    </select>
    {html}
</div>
          )
}

export default Location