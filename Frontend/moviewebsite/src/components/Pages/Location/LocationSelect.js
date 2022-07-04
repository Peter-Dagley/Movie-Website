import { useState } from 'react'

import LocationCity from './LocationCity.js'

const LocationSelect = (props) => {

    const [details, setBookingDetails] = useState({})
    const [location, setLocation] = useState({})
    const [page, setPage] = useState('')

    let locations = props.locations
    let prices = props.prices
    let movies = props.movies;

    const TakeBookingDetails = (details, id) =>
    {
        /*location = locations[id]*/
        setBookingDetails(details)
        setPage('booking')
    }


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
            </div>
        )
    }
}

export default LocationSelect