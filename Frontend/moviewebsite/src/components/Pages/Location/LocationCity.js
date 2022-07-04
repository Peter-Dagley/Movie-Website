import { useState } from 'react'
import Moment from 'moment'
import LocationBooking from './LocationBooking'

const LocationCity = (props) => {

    const [page, setPage] = useState('')
    const [session, setSession] = useState({})


    let movies = props.movies
    let location = props.location

    let date = '2022-06-30'
    let tdate = Moment(date).format("YYYY-MM-DD")
    let ddate = Moment(date).format("ddd Do MMM YYYY").toUpperCase()

    let tsessions = []
    
    for (let i in location.sessions)
    {
         if (location.sessions[i].date === tdate)
        {
            tsessions.push(location.sessions[i])
        }
    }

    if (page === 'booking')
    {
        return <LocationBooking session={session} prices={props.prices} />
    }
    else
    {
        return  (
            <div align="center">
                {location.city}
                {tsessions.map
                (sessions =>
                    (
                    <table className="location-movie-details" cellPadding="5" cellSpacing="0" border="0">
                    <tr rowSpan="100%"><td>poster</td></tr>
                    <tr><td><strong>{movies[sessions.movie].title}</strong></td></tr>
                    <tr><td>starring {movies[sessions.movie].starring}</td></tr>
                    <tr><td>run time {movies[sessions.movie].runtime}</td></tr>
                    <tr><td>{ddate}</td></tr>
                            {
                                sessions.times.map
                                (time =>
                                    (
                                        <input type="button" className="location-time" value={time} onClick=
                                                                    {() => 
                                                                        {
                                                                            setSession
                                                                            (
                                                                                {time:time
                                                                                ,movie:{id:sessions.movie, title:movies[sessions.movie].title}
                                                                                ,cinema:sessions.cinema
                                                                                ,date:sessions.date
                                                                                ,location:{id:location.id, city:location.city}
                                                                                }
                                                                            );
                                                                            setPage('booking')
                                                                        }
                                                                    }
                                                                    >
                                                                    </input>
                                    )
                                )
                            }
                    </table>
                    )
                )
                }
            </div>
                )
        }
}

export default LocationCity