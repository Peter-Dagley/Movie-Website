import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import LocationBooking from './LocationBooking.js'
import LocationCity from './LocationCity.js'
import Location from './Location.js'

const LocationConfirm = ({movies, booking, payment, session, location, prices}) =>{

    const [confirm, setConfirm] = useState(<div></div>)
    const [page, setPage] = useState('')

    const findBooking = (booking) =>
    {
    /*
            Check to see if booking exists, using location, date, cinema, time and seat
    */
            let key = booking.location.id + '*' + booking.date + '*' + booking.cinema + '*' + booking.time + '*' + booking.seat
            
            axios.get("http://localhost:4000/booking/find/" + key)
            .then
            ((response) => 
                {
                    if (response.data.status)
                    {
                        setConfirm
                            (
                            <div>
                                <div className="location-message">Booking already exists, click 'back' for a new booking</div>
                                <div>
                                    <input type="button" className="location-button" value="back" onClick={() => {setPage('booking')}}></input>
                                    <input type="button" className="location-button" value="new location" onClick={() => {setPage('location')}}></input>
                                  </div>
                            </div>
                            )
                    }
                    else
                    {
                        setPage('')

                        addBooking
                            ( 
                                {"location":booking.location.id
                                ,"date":booking.date
                                ,"cinema":booking.cinema
                                ,"time":booking.time
                                ,"seat":booking.seat
                                ,"reference":booking.location.city + '#' + booking.movie.title + '#' + booking.date + '#' + booking.time + '#' + booking.seat
                                }
                            )

                        addPayment(payment)
                            
                        setConfirm
                            (
                                <div>
                                    <div className="location-message">Booking confirmed Enjoy the movie</div>
                                    <div>
                                        <input type="button" className="location-button" value="new booking" onClick={() => {setPage('new')}}></input>
                                        <input type="button" className="location-button" value="new location" onClick={() => {setPage('location')}}></input>
                                    </div>
                                </div>
                            )
                    }
                }
            )
            .catch
            ((error) => 
                {
                    console.log('Error LocationConfirm() booking/find/' + key + ': ' + error)
                }
            )       
    }

    const addBooking = (booking) => 
    {
    /*
        Add the booking
    */
        axios.post("http://localhost:4000/booking/add", {content: booking})
        .then
        ((response) => 
            {
                console.log('Booking Status ' + response.statusText)
            }
        )
        .catch
        ((error) => 
            {
                console.log('Error LocationConfirm() booking/add: ' + error)
            }
        )
    }

    const addPayment = () =>
    {
        console.log('add payment')
        axios.post("http://localhost:4000/payment/add", {content: payment})
        .then
        ((response) => 
            {
                console.log('Booking Status ' + response.statusText)
            }
        )
        .catch
        ((error) => 
            {
                console.log('Error LocationPayment() payment/add: ' + error)
            }
        )
    }

    useEffect(() => 
    {
        findBooking(booking)
    }, [])


    if (page === 'booking')
    {
        return <LocationBooking movies={movies} location={location} session={session} prices={prices} />
    }
    else if(page === 'new')
    {
        return <LocationCity movies={movies} location={location} prices={prices} />

    }
    else if(page === 'location')
    {
        return <Location movies={movies} location={location} prices={prices} />

    }
    else
    {
        return (
            <div align="center">
                <table>
                    <tr><td className="location-city-title" colspan="100%">{booking.location.city}</td></tr>
                    <tr><td className="location-label">Movie</td><td className="location-data">{booking.movie.title}</td></tr>
                    <tr><td className="location-label">Date</td><td className="location-data">{Moment(booking.date).format("ddd Do MMM YYYY")}</td></tr>
                    <tr><td className="location-label">Time</td><td className="location-data">{booking.time}</td></tr>
                    <tr><td className="location-label">Cinema</td><td className="location-data">{booking.cinema}</td></tr>
                    <tr><td className="location-label">Adults</td><td className="location-data">{booking.adults}</td></tr>
                    <tr><td className="location-label">Children</td><td className="location-data">{booking.children}</td></tr>
                    <tr><td className="location-label">Seats</td><td className="location-data">{booking.seat}</td></tr>
                    <tr><td className="location-label">Total</td><td className="location-data">£{booking.total}</td></tr>
                </table>
                {confirm}
        </div>
        )
    }
}

export default LocationConfirm