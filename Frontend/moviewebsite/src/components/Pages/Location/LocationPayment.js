import { useState } from 'react'
import Moment from 'moment'
import LocationConfirm from './LocationConfirm.js'

const LocationPayment = ({movies, booking, session, location, prices}) =>
{
    const [page, setPage] = useState('')
    const [cardInput, setCardInput] = useState('')
    const [expiryInput, setExpiryInput] = useState('')
    const [securityInput, setSecurityInput] = useState('')
    const [message, setMessage] = useState('')
    const [payment, setPayment] = useState({})

    const Validate = () =>
    {
        let valid = true;

        if (cardInput === '')
        {
            valid = false
            setMessage('Please enter your card number')
        }
        else if (expiryInput === '')
        {
            valid = false
            setMessage('Please enter you card expiry date')

        }
        else if (securityInput === '')
        {
            valid = false
            setMessage('Please enter you security number')
        }

        if (valid)
        {
            setPayment
                (
                    {'adults': booking.adults
                    ,'children': booking.children
                    ,'date': Moment().format('YYYY-MMM-DD')
                    ,'time' : Moment().format('HH:MM')
                    ,'card': cardInput
                    ,'amount': booking.total
                    ,'reference': booking.reference
                    }
                )

            setPage('confirm')
        }
    }

    if (page === 'confirm')
    {
        return <LocationConfirm movies={movies} booking={booking} payment={payment} session={session} location={location} prices={prices} />
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
                    <tr><td className="location-label" colSpan="100%">Payment Details</td></tr>
                    <tr><td className="location-label">card number</td><td><input type="text" value={cardInput} onChange={(e) => setCardInput(e.target.value)} required></input></td></tr>
                    <tr><td className="location-label" colSpan="100%">expiry date <input type="text" style={{width:'5vw'}} placeholder="MM/YY" value={expiryInput} onChange={(e) => setExpiryInput(e.target.value)} required></input>security date <input type="text" style={{width:'5vw'}} value={securityInput} onChange={(e) => setSecurityInput(e.target.value)}  required></input></td></tr>
                    <tr><td colSpan="100%"><input type="button" className="location-button" value="confirm" onClick={() => Validate()} ></input></td></tr>
                    <tr><td className="location-message" colSpan="100%">{message}</td></tr>
                </table>
        </div>)
    }
}

export default LocationPayment