import { useState } from 'react'
import LocationCity from './LocationCity.js'

const LocationSelect = (props) => {

    const [location, setLocation] = useState({})
    const [page, setPage] = useState('')

    let locations = props.locations
    let prices = props.prices
    let movies = props.movies;
    let current = props.current

    let movielist = []
    let side = 'right'

  
    current.forEach
    (movie => 
        {
            if (movie.id !== 0)
            {
                if (side === 'right')
                {
                    movielist.push(<table><tr><td className="location-data">{movie.title}</td><td><img height="300vh" width="500vw" src={require('../../Images/' + movie.id + '.jpg')} alt={movie.title}></img></td></tr></table>)
                    side = 'left'
                }
                else
                {
                    movielist.push(<table><tr><td><img height="300vh" width="500vw" src={require('../../Images/' + movie.id + '.jpg')} alt={movie.title}></img></td><td className="location-data">{movie.title}</td></tr></table>)
                    side = 'right'
                }
            }
            else
            {
                movielist.push(<div>{movie.title}</div>)
            }

        }
    )
    

    if (page === 'city')
    {
        return <LocationCity movies={movies} location={location} prices={prices} />
    }
    else
    {
        return (
        <div align="center">
            <h1 className="subtitle">Location</h1>
            <select className="location-button" onChange={(event) => {setLocation(locations[event.target.value]);setPage('city')}}>
                <option value="">Please select a city</option>
                {locations.map
                    ((location) =>
                        (
                            <option key={location.id} value={location.id}>{location.city}</option>
                        )
                    )
                }
            </select>
            <div className="location-page">
                {movielist.map
                    ((movie) =>
                        (
                            movie
                        )

                    )
                }
            </div>
        </div>
        )
    }
}

export default LocationSelect