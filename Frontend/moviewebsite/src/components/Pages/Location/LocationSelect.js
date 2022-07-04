import { useState } from 'react'

import LocationCity from './LocationCity.js'

const LocationSelect = (props) => {

    const [details, setBookingDetails] = useState({})
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
            if (side === 'right')
            {
                movielist.push(<table><tr><td>{movie.title}</td><td><img height="300vh" width="150vw" src={require('../../Images/' + movie.id + '.jpg')}></img></td></tr></table>)
                side = 'left'
            }
            else
            {
                movielist.push(<table><tr><td><img height="300vh" width="150vw" src={require('../../Images/' + movie.id + '.jpg')}></img></td><td>{movie.title}</td></tr></table>)
                side = 'right'

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
            <select onChange={(event) => {setLocation(locations[event.target.value]);setPage('city')}}>
                <option value="">Please select a city</option>
                {locations.map
                    ((location) =>
                        (
                            <option key={location.id} value={location.id}>{location.city}</option>
                        )
                    )
                }
            </select>
            <div>
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