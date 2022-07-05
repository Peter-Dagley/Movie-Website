import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationBooking from './LocationBooking'

const LocationConfirm = ({booking, session, prices}) =>{

    const [confirm, setConfirm] = useState(<div></div>)
    const [page, setPage] = useState('')

    const addBooking = () => 
    {
      axios.get("http://localhost:4000/booking/add")
          .then
            ((response) => 
                {
                    console.log('add boooking')
                }
            )
    }

    const getBookings = () => 
    {
        axios.get("http://localhost:4000/bookings")
        .then
        ((response) => 
            {
                console.log('boookings')
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
                                <div><input type="button" value="back" onClick={() => {setPage('booking')}}></input></div>
                            </div>
                    )
                }
                else
                {   
                    setPage('')
                    setConfirm(<div>Booking confirmed Enjoy the movie</div>)
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
        return <LocationBooking session={session} prices={prices}/>
    }
    else
    {
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
}

export default LocationConfirm