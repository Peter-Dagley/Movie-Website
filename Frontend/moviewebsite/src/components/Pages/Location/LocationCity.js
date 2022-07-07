import { useState } from 'react'
import Moment from 'moment'
import LocationBooking from './LocationBooking'

const LocationCity = (props) => {

    const [page, setPage] = useState('')
    const [session, setSession] = useState({})

    let movies = props.movies
    let location = props.location

    let tdate = Moment().format("YYYY-MM-DD")
    let ddate = Moment().format("ddd Do MMM YYYY")

    let tsessions = []

    for (let i in location.sessions)
    {
        if (location.sessions[i].date === tdate)
        {
            tsessions.push(location.sessions[i])
        }
    }

    if (tsessions.length === 0)
    {
        tsessions.push({"date": tdate, "cinema":0, "movie":0, "times":['none']})
    }

    if (page === 'booking')
    {
        return <LocationBooking movies={movies} location={location} session={session} prices={props.prices} />
    }
    else
    {
        return  (
            <div align="center">
                <div className="location-city-title">{location.city}</div>
                <div className="location-address">{location.address}</div>
                <div></div>
                {tsessions.map
                (sessions =>
                    (
                    <table className="location-movie-details" cellPadding="5" cellSpacing="0" border="2">
                    <tr>
                        <td><img src={require('../../Images/' + sessions.movie + '.jpg')} height="200vh" width="140vw" alt={sessions.movie}></img></td>
                        <td>
                            <table>
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
                        </td>
                    </tr>
                    </table>
                    )
                )
                }
            </div>
                )
        }
}

export default LocationCity