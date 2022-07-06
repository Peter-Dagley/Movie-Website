const router = require("express").Router();
const Booking = require("../models/bookingModels");

router.get
('/bookings/', function(request, response)
    {
        Booking.find
        ({}, (error, bookinglist) =>
            {
                let bookings = []

                if (error)
                {
                    console.log('Error bookings:' + error)
                    bookings.push({"location":"Error bookings: " + error})
                }
                else
                {
                    for (let i in bookinglist)
                    {
                        bookings.push(bookinglist[i])
                    }
                }

                response.send(bookings)
            }
        )
    }
)

router.get
('/bookings/select/location/:id', function(request, response)
    {
        let id = request.params.id

        Booking.find
        ({"location":id}, (error, bookinglist) =>
            {
                let bookings = []

                if (error)
                {
                    console.log('Error bookings/select/location/' + id + ' ' + error)
                    bookings.push({"location":"Error bookings/select/location/" + id + " + error"})
                }
                else
                {
                    bookings.push(bookinglist)
                }

                response.send(bookings)
            }
        )
    }
)

router.post
('booking/add', function(request, response)
    {
        let booking = request.body.content

        Console.log('booking ' + booking)

        Booking.insertOne(booking, (error) =>
            {
                if (error)
                {
                    Console.log('Error booking/add ' + error)
                    response.send('Error booking/add ' + error)
                }
                else
                {
                    response.send(0)
                }
            }
        )
    }
)

module.exports = router;