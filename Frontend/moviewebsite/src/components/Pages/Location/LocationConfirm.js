import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import LocationBooking from './LocationBooking'
import LocationCity from './LocationCity'

const LocationConfirm = ({movies, booking, session, location, prices}) =>{

    const [confirm, setConfirm] = useState(<div></div>)
    const [page, setPage] = useState('')

    const addBooking = (booking) => 
    {
        /*
            Add the booking
        */
        axios.post("http://localhost:4000/booking/add", {content: booking})
        .then
            ((response) => 
                {
                    console.log('Booking  Status (Ref: ' + booking.reference + ') ' + response.statusText)
                }
            )
        .catch
            ((error) => 
                {
                    console.log('Error LocationConfirm() booking/add: ' + error)
                }
            )
    }

    const getBookings = () => 
    {
    /*
        Check to see if the booking already exists
    */
        axios.get("http://localhost:4000/bookings")
        .then
        ((response) => 
            {
                let bookinglist = []
                let book = {location:'', date:'', cinema:'', time:'', seat:'', adults:'', children:''}
            
                for (let i in response.data)
                {
                    book.location   = response.data[i].location
                    book.date       = response.data[i].date
                    book.cinema     = response.data[i].cinema
                    book.time       = response.data[i].time
                    book.seat       = response.data[i].seat
                    book.adults     = response.data[i].adults
                    book.children   = response.data[i].children
  
                    if (!bookinglist[book.location])
                    {
                        bookinglist[book.location] = []
                    }
                    if (!bookinglist[book.location][book.date])
                    {
                        bookinglist[book.location][book.date] = []
                    }
                    if (!bookinglist[book.location][book.date][book.cinema])
                    {
                        bookinglist[book.location][book.date][book.cinema] = []
                    }
                    if (!bookinglist[book.location][book.date][book.cinema][book.time])
                    {
                        bookinglist[book.location][book.date][book.cinema][book.time] = []
                    }
  
                    bookinglist[book.location][book.date][book.cinema][book.time][book.seat] = response.data[i]
                }

                let valid = true
 
                if (bookinglist[booking.location.id])
                {    
                    if (bookinglist[booking.location.id][booking.date])
                    {
                        if (bookinglist[booking.location.id][booking.date][booking.cinema])
                        {
                            if (bookinglist[booking.location.id][booking.date][booking.cinema][booking.time])
                            {
                                if (bookinglist[booking.location.id][booking.date][booking.cinema][booking.time][booking.seat])
                                {
                                    valid = false
                                }
                            }
                        }
                    }
                }

                if (valid === false)
                {
                    setConfirm
                    (
                        <div>
                            <div>Booking already exists, click 'back' for a new booking</div>
                            <div><input type="button" className="location-button" value="back" onClick={() => {setPage('booking')}}></input></div>
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
                                ,"reference":booking.location.city + booking.date + booking.time + booking.seat
                                }
                            )
                    
                    setConfirm(<div><div>Booking confirmed Enjoy the movie</div><div><input type="button" className="location-button" value="new booking" onClick={() => {setPage('new')}}></input></div></div>)
                }
            }
        )
    }

    useEffect(() => 
    {
        getBookings()
    }, [])


    if (page === 'booking')
    {
        return <LocationBooking movies={movies} location={location} session={session} prices={prices} />
    }
    else if(page === 'new')
    {
        return <LocationCity movies={movies} location={location} prices={prices} />

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