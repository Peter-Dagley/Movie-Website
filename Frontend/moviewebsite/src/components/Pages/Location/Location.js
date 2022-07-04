import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationSelect from './LocationSelect.js'
import './LocationStyles.css'

const Location = () => {

  const [locations, setLocations] = useState([])
  const [prices, setPrices] = useState([])
  const [movies, setMovies] = useState([])


  const getLocations = () => 
  {
    axios.get("http://localhost:4000/locationlist")
        .then((response) => {

            let locationlist = []

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

            let movielist = []

            for (let i in response.data)
            {
              let movie = response.data[i]
              movielist[movie.id] = movie
            }

            setMovies(movielist)
        })
  }

  const getPrices = () => 
  {
    axios.get("http://localhost:4000/prices")
        .then((response) => {
            let pr = response.data
            let pc = []

            for (let i in pr)
            {
              pc[pr[i].type] = pr[i].price
            }

            setPrices(pc)
        })
  }

  useEffect(() => 
  {
      getLocations()
      getMovies()
      getPrices()
  }, [])

  let initial = true
  return <LocationSelect locations={locations} movies={movies} prices={prices} initial={initial} />
  

}

export default Location