import { useState } from 'react'
import Moment from 'moment'
import LocationConfirm from './LocationConfirm'

const LocationBooking = ({movies, location, session, prices}) => {

    const [message, setMessage] = useState('')
    const [adultsInput, setAdultsInput] = useState('0')
    const [childrenInput, setChildrenInput] = useState('0')
    const [row, setRow] = useState('')
    const [seat, setSeat] = useState('')
    const [page, setPage] = useState('')
    const [booking, setBooking] = useState({})


    const ValidateBooking = () =>
    {
    /*
        Validate the user booking input
        Must have an AdultInput more than zero
        Must have a value for Row and Seat
    */
        setMessage('')
        let valid = true
        
        if (adultsInput === '' || adultsInput === '0')
        {
            valid = false
            setMessage('Please enter a value for the number of adults')
        }
        else if (row === '')
        {
            valid = false
            setMessage('Please select a row')
        }
        else if (seat === '')
        {
            valid = false
            setMessage('Please select a seat')
        }

        if (valid)
        {
            let total = (prices['adult'] * adultsInput) + (prices['child'] * childrenInput)

            setBooking
            (   
                {adults:adultsInput
                ,children:childrenInput
                ,date:session.date
                ,cinema:session.cinema
                ,time:session.time
                ,seat:row + seat
                ,location:{id:session.location.id, city:session.location.city}
                ,movie:{id:session.movie.id, title:session.movie.title}
                ,total:total
                }
            )

            setPage('confirm')
        }
    }

    const changeAdultsInput = (i, type) =>
    {
    /*
        adds or subtracts one from the AdultsInput field
    */
        setAdultsInput(i)

        let input = 0

        if (type === 'add')
        {
            input = parseInt(adultsInput) + 1
        }
        else
        {
            if (parseInt(adultsInput) !== 0)
            {
                input = parseInt(adultsInput) - 1
            }
        }

        setAdultsInput(input)
        
    }

    const changeChildrenInput = (i, type) =>
    {
    /*
        adds or subtracts one from the ChildrenInput field
    */
        setChildrenInput(i)

        let input = 0

        if (type === 'add')
        {
            input = parseInt(childrenInput) + 1
        }
        else
        {
            if (parseInt(childrenInput) !== 0)
            {
                input = parseInt(childrenInput) - 1
            }
        }

        setChildrenInput(input)
        
    }

    if (page === 'confirm')
    {
        return <LocationConfirm movies={movies} booking={booking} session={session} location={location} prices={prices} />
    }
    else
    {
        return (
        <div align="center">
            <table cellSpacing="0" cellPadding="0" border="0">
                <tr><td className="location-city-title" colSpan="100%" align="center">{session.location.city}</td></tr>
                <tr><td className="location-label">Movie</td><td className="location-data">{session.movie.title}</td></tr>
                <tr><td className="location-label">Date</td><td className="location-data">{Moment(session.date).format("ddd Do MMM YYYY")}</td></tr>
                <tr><td className="location-label">Cinema</td><td className="location-data">{session.cinema}</td></tr>
                <tr><td className="location-label">Time</td><td className="location-data">{session.time}</td></tr>
                <tr>
                    <td className="location-label">Adults</td>
                    <td>
                        <input type="text" className="location-input" value={adultsInput} readonly></input>
                        <input type="button" className="location-input-button" value="-" onClick={(e) => changeAdultsInput(e.target.value, 'sub')}></input>
                        <input type="button" className="location-input-button" value="+" onClick={(e) => changeAdultsInput(e.target.value, 'add')}></input>
                    </td>
                </tr>
                <tr><td className="location-label">Children</td>
                    <td>
                        <input type="text" className="location-input" value={childrenInput} readonly></input>
                        <input type="button" className="location-input-button" value="-" onClick={(e) => changeChildrenInput(e.target.value, 'sub')}></input>
                        <input type="button" className="location-input-button" value="+" onClick={(e) => changeChildrenInput(e.target.value, 'add')}></input>
                    </td>
                </tr>
                <tr>
                    <td className="location-label">Seat</td>
                    <td colSpan="100%">
                        <select className="location-select-button" onChange={(e) => setRow(e.target.value)}>
                            <option value="">Select Row</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                        <select className="location-select-button" onChange={(e) => setSeat(e.target.value)}>
                            <option value="">Select Seat</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </td>
                </tr>
                <tr><td>&nbsp;</td></tr>
                <tr><td colSpan="100%"><input type="button" className="location-button" value="confirm booking" onClick={ValidateBooking}></input></td></tr>
                <tr><td colSpan="100%">{message}</td></tr>
            </table>
        </div>
    )
    }
}

export default LocationBooking