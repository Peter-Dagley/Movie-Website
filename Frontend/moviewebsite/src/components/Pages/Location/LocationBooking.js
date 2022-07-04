import { useState } from 'react'
import LocationConfirm from './LocationConfirm'

const LocationBooking = ({session, prices}) => {

    const [message, setMessage] = useState('')
    const [adultsInput, setAdultsInput] = useState('0')
    const [childrenInput, setChildrenInput] = useState('0')
    const [row, setRow] = useState('')
    const [seat, setSeat] = useState('')
    const [page, setPage] = useState('')
    const [booking, setBooking] = useState({})


    const ValidateBooking = () =>
    {
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

        if (childrenInput === '')
        {
            setChildrenInput('0')
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

    if (page === 'confirm')
    {
        return <LocationConfirm booking={booking} />
    }
    else
    {
        return (
        <div align="center">
            <table cellSpacing="0" cellPadding="0" border="0">
                <tr><td colSpan="100%">{session.location.city}</td></tr>
                <tr><td style={{width:'8vw'}}>Movie</td><td>{session.movie.title}</td></tr>
                <tr><td>Date</td>{session.date}<td></td></tr>
                <tr><td>Cinema</td>{session.cinema}<td></td></tr>
                <tr><td>Time</td>{session.time}<td></td></tr>
                <tr><td>Adults</td><td><input type="text" value={adultsInput} onChange={(e) => setAdultsInput(e.target.value)}></input></td></tr>
                <tr><td>Children</td><td><input type="text" value={childrenInput} onChange={(e) => setChildrenInput(e.target.value)}></input></td></tr>
                <tr>
                    <td>Seat</td>
                    <td colSpan="100%">
                        <select onChange={(e) => setRow(e.target.value)}>
                            <option value="">Select Row</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                        <select onChange={(e) => setSeat(e.target.value)}>
                            <option value="">Select Seat</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
                <tr><td colSpan="100%"><input type="button" value="confirm booking" onClick={ValidateBooking}></input></td></tr>
                <tr><td colSpan="100%">{message}</td></tr>
            </table>
        </div>
    )
    }
}

export default LocationBooking