import { useState, useEffect } from 'react'
import axios from 'axios'

const LocationConfirm = ({booking}) =>{

    const [valid, setValid] = useState(true)
    const [confirm, setConfirm] = useState(<div></div>)

    const getBookings = () => 
    {
      axios.get("http://localhost:4000/bookings")
          .then((response) => {
            
            let bookinglist = []
            let book = {location:'', date:'', cinema:'', time:'', seat:'', adults:'', children:''}
            
            for (let i in response.data)
            {
                book.location   = response.data[i].location
                book.date       = response.data[i].date
                book.cinema     = response.data[i].cinema
                book.time       = response.data[i].time
                book.seat       = response.data[i].seat
                book.seat       = response.data[i].adults
                book.children   = response.data[i].children
  
                if (!bookinglist[book.location])
                {
                  bookinglist[book.location] = []
                }
                if (!bookinglist[book.location][book.date])
                {
                  bookinglist[book.location][book.date] = []
                }
                if (!bookinglist[book.location][book.date][book.screen])
                {
                  bookinglist[book.location][book.data][book.screen] = []
                }
                if (!bookinglist[book.location][book.date][book.screen][book.time])
                {
                  bookinglist[book.location][book.data][book.screen][book.time] = []
                }
  
                bookinglist[book.location][book.date][book.screen][book.time][book.seat] = response.data
            }

            if (bookinglist[booking.location])
            {
                if (bookinglist[booking.location][booking.date])
                {
                    if (bookinglist[booking.location][booking.date][booking.cinema])
                    {
                        if (bookinglist[booking.location][booking.date][booking.cinema][book.time])
                        {
                            if (bookinglist[booking.location][booking.date][booking.cinema][book.time][book.seat])
                            {
                                setValid(false)
                            }
                        }
                    }
                }
            }

            if (valid === false)
            {
                setConfirm(<div>Booking already exists, click 'back' for a new booking</div>)
            }
            else
            {   
                setConfirm(<div>Booking confirmed Enjoy the movie</div>)
            }
          })
    }

    useEffect(() => 
    {
        getBookings()
    }, [])

    return (
        <div align="center">
            <table>
            <tr><td>Location</td><td>{booking.location.city}</td></tr>
            <tr><td>Movie</td><td>{booking.movie.title}</td></tr>
            <tr><td>Date</td><td>{booking.date}</td></tr>
            <tr><td>Time</td><td>{booking.time}</td></tr>
            <tr><td>Cinema</td><td>{booking.cinema}</td></tr>
            <tr><td>Adults</td><td>{booking.adults}</td></tr>
            <tr><td>Children</td><td>{booking.children}</td></tr>
            <tr><td>Seats</td><td>{booking.seat}</td></tr>
            <tr><td>Total</td><td>£{booking.total}</td></tr>
            </table>
            {confirm}
        </div>
    )
}

export default LocationConfirm