import Moment from 'moment'

const LocationCity = ({movies, location}) => {

    let city = '';

    let tdate = Moment().format("YYYY-MMM-DD").toUpperCase()
    let ddate = Moment().format("ddd Do MMM YYYY").toUpperCase()

    let tsessions = []
    
    for (let i in location.sessions)
    {
         if (location.sessions[i].date === tdate)
        {
            tsessions.push(location.sessions[i])
        }
    }

    return  (
                <div>
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
                                (session =>
                                    (
                                        <input type="button" className="location-session" value={session} onclick=""></input>
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

export default LocationCity